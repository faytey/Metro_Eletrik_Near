use std::{env, fs};
use near_units::parse_near;
use serde_json::json;
use workspaces::{Account, Contract};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let wasm_arg: &str = &(env::args().nth(1).unwrap());
    let wasm_filepath = fs::canonicalize(env::current_dir()?.join(wasm_arg))?;

    let worker = workspaces::sandbox().await?;
    let wasm = std::fs::read(wasm_filepath)?;
    let contract = worker.dev_deploy(&wasm).await?;

    // create accounts
    let account = worker.dev_create_account().await?;
    let alice = account
        .create_subaccount( "alice")
        .initial_balance(parse_near!("30 N"))
        .transact()
        .await?
        .into_result()?;

    // begin tests
    test_default_message(&alice, &contract).await?;
    test_changes_message(&alice, &contract).await?;
    Ok(())
}

async fn test_default_message(
    user: &Account,
    contract: &Contract,
) -> anyhow::Result<()> {
    let message: String = user
        .call( contract.id(), "get_greeting")
        .args_json(json!({}))
        .transact()
        .await?
        .json()?;

    assert_eq!(message, "Hello".to_string());
    println!("      Passed ✅ gets default message");
    Ok(())
}

async fn test_changes_message(
    user: &Account,
    contract: &Contract,
) -> anyhow::Result<()> {
    user.call(contract.id(), "set_greeting")
        .args_json(json!({"message": "Howdy"}))
        .transact()
        .await?
        .into_result()?;

    let message: String = user
        .call(contract.id(), "get_greeting")
        .args_json(json!({}))
        .transact()
        .await?
        .json()?;

    assert_eq!(message, "Howdy".to_string());
    println!("      Passed ✅ changes message");
    Ok(())
}