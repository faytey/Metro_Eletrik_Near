use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::UnorderedMap;
use near_sdk::{env, near_bindgen, AccountId};
use std::collections::HashMap;

#[near_bindgen]
#[derive(BorshSerialize, BorshDeserialize)]
// #[derive(BorshSerialize, BorshDeserialize, Serialize)]
// #[Serde(crate = "near_sdk::serde")]
pub struct Contract {
    airdrop_data: HashMap<String, bool>,
    wallet_to_disco: HashMap<String, Disco>,
    controller: String,
    METR: String,
}

struct Disco {
    name: String,
    disco_wallet: String,
    admin_wallet: String,
    unit_price: u128,
}

impl Default for Contract {
    fn default() -> Self {
        Self {

        }
    }
}

#[near_bindgen] 
impl Contract {

}

#[cfg(test)]
mod tests {

}