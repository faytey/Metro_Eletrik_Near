// Find all our documentation at https://docs.near.org
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{log, near_bindgen};
use std::collections::HashMap;



// Define the default message
const METR: String = String::from("0xF2761f79E26BEC23906A59aD10e777e3b1b2dEF3");
const USDC: String = String::from("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48");

// Define the contract structure
#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct Contract {
    airdrop_data: UnorderedMap<String, bool>,
    wallet_to_disco: UnorderedMap<String, Disco>,
    controller: String,
    metr: METR,
    usdc: USDC,
    total_subs: u128,
    Disco_list: Vec<Disco>,
    Users: Vec<User>,
}


#[derive(BorshDeserialize, BorshSerialize)]
struct Disco {
    name: String,
    disco_wallet: String,
    admin_wallet: String,
    unit_price: u128,
}

struct User {
    wallet: String,
    meter_no: String,
    new_sub: u128,
    total_sub: u128,
}

// Define the default, which automatically initializes the contract
impl Default for Contract{
    fn default() -> Self {
        Self{airdrop_data: UnorderedMap::new()},
        Self{wallet_to_disco: UnorderedMap::new()},
        Self{controller: String.to_string()},
        Self{metr: METR.to_string() },
        Self{usdc: USDC.to_string() },
        Self{total_subs: u128},
        Self{Disco_list: Vec<Disco>},
        Self{Users: Vec<User>},
    }
}

// Implement the contract structure
#[near_bindgen]
impl Contract {
    fn create_disco(&mut self, name: String, unit_price: u128, disco_wallet: String) {
        assert_eq(unit_price > 0, "Invalid unit price");
        assert_eq(!name == "", "Invalid name");
        assert_eq(!disco_acct == "", "Invalid account");

        self.Disco_list = Disco_list.push(
            name,
            disco_wallet,
            admin_wallet: msg.sender,
            unit_price,
        )

        self.wallet_to_disco = wallet_to_disco.insert(k: String::from(disco_wallet).to_string(), v: Disco {
            name,
            disco_wallet,
            admin_wallet: msg.sender,
            unit_price,
        });
        log!("{} created", name);
    }

    fn get_discos(&self) -> Vec<Disco> {
        self.Disco_list.clone()
    }

    fn set_unit_price(&mut self, disco_wallet: String, new_price: u128) {
        assert_eq(new_price > 0, "Invalid value");
        assert_eq(caller == admin_wallet, "unauthorized caller");

        self.wallet_to_disco = wallet_to_disco.insert(k: String::from(disco_wallet), v: Disco {
            name,
            disco_wallet,
            admin_wallet,
            unit_price: new_price,
        })

        log!("Set new unit price: {}", new_price);
    }

    #[payable]
    fn subscribe(&mut self, unit_amount: u128, disco_acct: String, meter_no: u128) {
        assert_eq(unit_amount >= wallet_to_disco(disco_acct.to_string()));

        // transfer coin from user to disco account
        self.Users = User.push(
            wallet,
            meter_no,
            new_sub: unit_amount,
            total_sub: total_sub += unit_amount,
        )
        
        self.total_subs = total_subs + unit_amount;
        log!("New subscription: account: {}, meter num: {}, units: {}", msg.sender, meter_no, unit_amount);
    }
    

}

/*
 * The rest of this file holds the inline tests for the code above
 * Learn more about Rust tests: https://doc.rust-lang.org/book/ch11-01-writing-tests.html
 */
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn get_default_greeting() {
        let contract = Contract::default();
        // this test did not call set_greeting so should return the default "Hello" greeting
        assert_eq!(
            contract.get_greeting(),
            "Hello".to_string()
        );
    }

    #[test]
    fn set_then_get_greeting() {
        let mut contract = Contract::default();
        contract.set_greeting("howdy".to_string());
        assert_eq!(
            contract.get_greeting(),
            "howdy".to_string()
        );
    }
}

//COMPILE CLI: env RUSTFLAGS='-C link-arg=-s' cargo +stable build --target wasm32-unknown-unknown --release