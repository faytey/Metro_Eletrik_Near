use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{env, log, near_bindgen, Promise};
use near_sdk::collections::UnorderedMap;

// Define METR as a type alias for String
type METR = String;
type USDC = String;

const USDC: &str = "a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near";

// Define the contract structure
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Contract {
    wallet_to_disco: UnorderedMap<String, Disco>,
    admin: String, // Admin account ID
    metr: METR,
    usdc: USDC,
    total_subs: u128,
    Disco_list: Vec<Disco>,
    Users: UnorderedMap<String, User>,
}

#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize, Clone)]
struct Disco {
    name: String,
    disco_wallet: String,
    admin_wallet: String,
    unit_price: u128,
}

#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize, Clone)]
struct User {
    wallet: String,
    meter_no: String,
    new_sub: u128,
    total_sub: u128,
}

// Implement the contract structure
#[near_bindgen]
impl Contract {
    #[init]
    pub fn new(admin: String, metr: METR, usdc: USDC) -> Self {
        // Initialize the contract with the provided parameters.
        Self {
            wallet_to_disco: UnorderedMap::new(b"n"),
            admin,
            metr,
            usdc,
            total_subs: 0,
            Disco_list: Vec::new(),
            Users: UnorderedMap::new(b"u"),
        }
    }

    pub fn create_disco(&mut self, name: String, unit_price: u128, disco_wallet: String) {
        assert!(unit_price > 0, "Invalid unit price");
        assert!(name != "", "Invalid name");

        let new_disco = Disco {
            name: name.clone(),
            disco_wallet: disco_wallet.clone(),
            admin_wallet: env::predecessor_account_id(),
            unit_price,
        };

        self.Disco_list.push(new_disco.clone());

        self.wallet_to_disco.insert(&disco_wallet, &new_disco);

        log!("{} created", name);
    }

    pub fn get_discos(&self) -> Vec<Disco> {
        self.Disco_list.clone()
    }

    pub fn set_unit_price(&mut self, disco_wallet: String, new_price: u128) {
        assert!(new_price > 0, "Invalid value");
        assert!(env::predecessor_account_id(), self.wallet_to_disco[&disco_wallet].admin_wallet, "Unauthorized caller");

        self.wallet_to_disco.insert(&disco_wallet, &Disco {
            name: self.wallet_to_disco[&disco_wallet].name.clone(),
            disco_wallet: disco_wallet.clone(),
            admin_wallet: env::predecessor_account_id(),
            unit_price: new_price,
        });

        log!("Set new unit price: {}", new_price);
    }

    pub fn buy_units_with_usdc(&mut self, unit_amount: u128, meter_no: String) {
        let disco_wallet = self.wallet_to_disco.iter().find(|(_, disco)| disco.unit_price <= unit_amount);
        
        if let Some((disco_wallet, disco)) = disco_wallet {
            assert!(unit_amount >= disco.unit_price, "Invalid unit price");

            let usdc: String = self.usdc.clone();
            let wallet = env::predecessor_account_id();

            // Transfer USDC tokens (assumed as NEAR tokens) to the contract.
            let transfer = Promise::new(usdc).transfer(unit_amount);
            transfer.then(ext_self::handle_buy_units_with_usdc(
                disco_wallet,
                meter_no,
                wallet,
                unit_amount,
            )).return_as_result().expect("USDC transfer failed");
        } else {
            env::panic("buy_units_with_usdc: No valid disco wallet found for this unit price".as_bytes());
        }
    }

    pub fn buy_units_with_near(&mut self, disco_wallet: String, meter_no: String) {
        let attached_balance = env::attached_deposit();
        let unit_amount = self.wallet_to_disco[&disco_wallet].unit_price;

        // Check for valid unit price and meter number.
        if unit_amount <= 0 || attached_balance < unit_amount || meter_no.is_empty() {
            env::panic("buy_units_with_near: Invalid unit price, meter number, or attached deposit".as_bytes());
        }

        // Transfer NEAR tokens to the contract as Ether.
        let transfer_success = Promise::new(env::predecessor_account_id()).transfer(unit_amount);
        transfer_success.then(ext_self::handle_buy_units_with_near(
            disco_wallet,
            meter_no,
            attached_balance,
        )).return_as_result().expect("Near transfer failed");
    }

    pub fn withdraw_near(&self, to: String, amount: u128) {
        // Check if the sender is the admin.
        assert!(env::predecessor_account_id(), self.admin, "Only admin can withdraw NEAR tokens");

        // Ensure a valid destination account and a non-zero amount.
        assert!(env::is_valid_account_id(to.as_bytes()), "Invalid destination account");
        assert!(amount > 0, "Invalid amount");

        // Transfer NEAR tokens to the specified account.
        let transfer = Promise::new(to).transfer(amount);
        transfer.return_as_result().expect("Failed to send NEAR tokens");
    }

    pub fn withdraw_usdc(&self, to: String, amount: u128) {
        // Check if the sender is the admin.
        assert!(env::predecessor_account_id(), self.admin, "Only admin can withdraw USDC tokens");

        // Ensure a valid destination account and a non-zero amount.
        assert!(env::is_valid_account_id(to.as_bytes()), "Invalid destination account");
        assert!(amount > 0, "Invalid amount");

        // Call the USDC contract on NEAR to transfer tokens to the specified account.
        let transfer_to = json!({
            "receiver_id": to,
            "amount": amount.to_string(),
            "memo": "USDC transfer"
        }).to_string();

        let usdc = self.usdc.clone();
        let usdc_contract = self.usdc.clone();

        let promise = Promise::new(usdc)
            .function_call("ft_transfer", transfer_to.as_bytes(), 0, env::storage_usage());
        promise.then(ext_self::handle_withdraw_usdc(usdc_contract, to, amount))
            .return_as_result()
            .expect("Failed to send USDC tokens");
    }
}
