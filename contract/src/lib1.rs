use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{env, log, near_bindgen};
use near_sdk::collections::{UnorderedMap};
use std::collections::HashMap;

// define METR as a type alias for String
type METR = String;
type USDC = String;

const USDC: &str = "a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near";

// Define the contract structure
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Contract {
    wallet_to_disco: UnorderedMap<String, Disco>,
    controller: String,
    metr: METR,
    usdc: USDC,
    total_subs: u128,
    Disco_list: Vec<Disco>,
    Users: Vec<User>,
}


#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize, Clone)]
#[serde(crate = "near_sdk::serde")]
struct Disco {
    name: String,
    disco_wallet: String,
    admin_wallet: String,
    unit_price: u128,
}

#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
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
    pub fn new() -> Self {
        //create a variable of type Self with all the fields initialized. 
        Self {
            airdrop_data: UnorderedMap::new(b"m"),
            wallet_to_disco: UnorderedMap::new(b"n"),
            controller: "controller?".to_string(),
            metr: METR.to_string(),
            usdc: USDC.to_string(),
            total_subs: 0,
            Disco_list: Vec::new(),
            Users: Vec::new(),
        }
    }

    pub fn create_disco(&mut self, name: String, unit_price: u128, disco_wallet: String) {
        assert!(unit_price > 0, "Invalid unit price");
        assert!(name != "", "Invalid name");

        let new_disco = Disco {
            name: name.clone(),
            disco_wallet: disco_wallet.clone(),
            admin_wallet: env::predecessor_account_id().to_string(),
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
        assert!(env::predecessor_account_id(), self.wallet_to_disco[&disco_wallet].admin_wallet, "unauthorized caller");

        self.wallet_to_disco.insert(&disco_wallet, &Disco {
            name: name.clone(), // Replace with the actual name.
            disco_wallet: disco_wallet.clone(),
            admin_wallet: env::predecessor_account_id(),
            unit_price: new_price,
        });

        env::log(format!("Set new unit price: {}", new_price).as_bytes());
    }

    pub fn buy_units_with_usdc(&mut self, unit_amount: u128, meter_no: u128) {
        if unit_amount < self.wallet_to_disco[&disco_wallet].unit_amount {
            env::panic("buy_units_with_usdc: Invalid unit price".as_bytes());
        }

        let usdc: String = self.usdc;

        USDC::transfer_from(usdc, env::predecessor_account_id(), env::current_account_id(), unit_amount);

        self.wallet_to_disco[&disco_wallet].unit_amount = unit_amount;
        self.total_subs += unit_amount;

        env::log(format!("Subscription: {} units purchased by {}", unit_amount, env::predecessor_account_id()).as_bytes());
    }

    pub fn buy_units_with_near(&mut self,disco_wallet: String, meter_no: u128) {
        let attached_balance = env::attached_deposit();
        let unit_amount = self.wallet_to_disco[&disco_wallet].unit_amount; // Assuming unit price is stored in the contract state.

        // Check for valid unit price and meter number.
        if unit_amount > 0 && meter_no > 0 {
            assert!(attached_balance >= unit_amount, "Insufficient attached deposit");

            // Transfer NEAR tokens to the contract as Ether.
            let transfer_success = Promise::new(env::predecessor_account_id()).transfer(unit_amount);
            assert!(transfer_success, "Near transfer failed");

            // Calculate units based on the transferred NEAR tokens (assumed as Ether equivalent).
            let units = u128::from(attached_balance) * unit_amount;

            // Update user data and contract state.
            // You would need to have a User struct with these fields in your contract.
            let mut user = User {
                wallet: env::predecessor_account_id(),
                meter_no,
                new_sub: units,
                total_sub: total_sub += units,
            };

            // Log the subscription.
            env::log(format!("Subscription: {} units purchased for Meter No: {} by {} (NEAR Amount: {})", units, meter_no, user.wallet, attached_balance).as_bytes());
        } else {
            env::panic("buyUnits: Invalid unit price or meter number".as_bytes());
        }

        pub fn withdraw_near(&self, to: AccountId, amount: Balance) {
            // Check if the sender is the admin account.
            assert!(env::predecessor_account_id(), self.wallet_to_disco[&disco_wallet].admin_wallet, "Only admin can withdraw NEAR tokens");
    
            // Ensure a valid destination account and amount.
            assert!(env::is_valid_account_id(to.as_bytes()), "Invalid destination account");
            assert!(amount > 0, "Invalid amount");
    
            // Transfer NEAR tokens to the specified account.
            let promise = Promise::new(to).transfer(amount);
            promise.return_as_result().expect("Failed to send NEAR tokens");
        }

        pub fn withdraw_usdc(&self, to: AccountId, amount: u128) {
            // Check if the sender is the admin account.
            assert_eq!(env::predecessor_account_id(), self.wallet_to_disco[&disco_wallet].admin_wallet, "Only admin can withdraw USDC tokens");
    
            // Ensure a valid destination account and a non-zero amount.
            assert!(env::is_valid_account_id(to.as_bytes()), "Invalid destination account");
            assert!(amount > 0, "Invalid amount");
    
            // Call the USDC contract on NEAR to transfer tokens to the specified account.
            let transfer_to = json!({
                "receiver_id": &to,
                "amount": amount.to_string(),
                "memo": "USDC transfer"
            })
            .to_string();
            
            let promise = Promise::new(self.usdc_contract.clone())
                .function_call("ft_transfer", transfer_to.as_bytes(), 0, env::storage_usage());
            
            promise.return_as_result().expect("Failed to send USDC tokens");
        }
    }