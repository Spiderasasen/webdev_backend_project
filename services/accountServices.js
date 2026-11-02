import Account from "../models/Account.js";

//getting the size of the account
const accounts = [];

//creating the accounts
export function createAccount(username, password, repositories, languages) {
    //getting the current amount and increasing to 1
    const newAccountId = accounts.length + 1;

    //setting the section
    const account = new Account(
        newAccountId,
        username,
        password,
        repositories,
        languages
    );
    console.log(account);

    accounts.push(account);
    return account;
}

//getting one account
function getOneAccount(accountId){
    const accountFound = accounts.find(account => accountId === account.accountId);
    if(accountFound){
        console.log("Account found: ", accountFound);
    }
    else{
        console.log("Account not found: ", accountId);
    }
    return accountFound;
}