import Account from "../models/Account.js";

//getting the size of the account
const accounts = [];

/*Functions that will be used by the frontend*/

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
export function getOneAccount(accountId){
    const accountFound = accounts.find(account => accountId === account.accountId);
    if(accountFound){
        console.log("Account found: ", accountFound);
    }
    else{
        console.log("Account not found: ", accountId);
    }
    return accountFound;
}

//updating the account
export function updateAccount(accountId, username, password, repositories, languages) {
    const account = getOneAccount(accountId);

    //if no accounts where found, just return the id
    if(!account){
        return undefined;
    }

    console.log("Before Change: ", account);

    account.accountUsername = username;
    account.accountPassword = password;
    account.accountRepositories = repositories;
    account.accountLanguages = languages;

    console.log("After Change: ", account);

    return account;
}

export function getSections(accountId, section){
    const account = getOneAccount(accountId);
    let results;

    //just to pretty print the console log
    const sections = ["Languages", "Repositories"];

    //checking if there is an account found
    if(account){
        //checking if we are looking for languages or repositories
        switch(section){
            case "r": //getting the repositories
                console.log(`getting ${sections[1]} from account id ${accountId}`);
                results = account.accountRepositories;
                break;
            case "l": //getting the languages
                console.log(`getting ${sections[0]} from account id ${accountId}`);
                results = account.accountLanguages;
                break;
            default: //there was no section selected
                console.log("Please declare a section in the parameter");
                results = null;
                break;
        }
        console.log(results);
        return results;
    }
    //no account found
    console.log("No account found")
    return undefined

}


/*this is mainly going to be used for testing then for the real api use*/

//getting all accounts
export function getAllAccounts() {
    console.log("your accounts: ", accounts);
    return accounts;
}

//delating accounts
export function deleteAccount(id) {
    let index = 0;
    for(let account of accounts){
        if(account.accountId === id) {
            console.log("Account found: ", account);
            accounts.splice(index, 1);
            return id;
        }
        index++;
    }
    console.log("No accounts found.");
    return undefined;
}
