import {createAccount, getSections, getAllAccounts, deleteAccount, getOneAccount, updateAccount} from "../services/accountServices.js";

/*For the frontend section*/

//creating the account
export async function apiCreateAccount(req, res)  {
    console.log("Creating account using the api...");
    console.log(`username: ${req.body.accountUsername}, password: ${req.body.password}, repo: ${req.body.accountRepositories}, language: ${req.body.language}`);
    const newAccount = await createAccount(req.body.accountUsername, req.body.accountPassword, req.body.accountRepositories, req.body.accountLanguages);
    res.json(newAccount);
    console.log(`New account created: ${newAccount}`);
}

//getting a single account
export async function apiGetOneAccount(req, res)  {
    console.log(`Getting account id ${req.params.accountId} using the api...`);
    const account = await getOneAccount(req.params.accountId);
    if(account){
        res.json(account);
        console.log(`Found account using the api: ${account}`);
    }
    else{
        res.status(404).send({error: 'No account found'});
    }
}

//getting the account langauge
export async function apiGetLanguages(req, res)  {
    console.log("Getting languages using the api...");
    const accountLanguages = await getSections(req.params.accountId, "l");
    if(accountLanguages){
        res.json(accountLanguages);
        console.log(`Found account languages: ${accountLanguages}`);
    }
    else{
        res.status(404).send({error: 'No account found'});
    }
}

//getting the account repositories
export async function apiGetRepositories(req, res)  {
    console.log("Getting account repositories using the api...");
    const accountRepositories = await getSections(req.params.accountId, "r");
    if(accountRepositories){
        res.json(accountRepositories);
        console.log(`Found account repositories: ${accountRepositories}`);
    }
    else{
        res.status(404).send({error: 'No account found'});
    }
}

//updating the account
export async function apiUpdateAccount(req, res)  {
    console.log("Updating account using the api...");
    const updatedAccount = await updateAccount(req.params.accountId, req.body.accountUsername, req.body.accountPassword, req.body.accountRepositories, req.body.accountLanguages);
    if(updatedAccount){
        res.json(updatedAccount);
        console.log(`Found account and updated it: ${updatedAccount}`);
    }
    else{
        res.status(404).send({error: 'No account found'});
    }
}

/*For testing the backend*/

//getting all accounts
export function apiGetAllAccounts(req, res)  {
    console.log("Getting all accounts using the api...");
    res.json(getAllAccounts())
}

//deleting the accounts
export async function apiDeleteAccount(req, res)  {
    console.log("Deleting account using the api...");
    const deletedAccount = await deleteAccount(req.params.accountId);
    if(deletedAccount) {
        res.json(deletedAccount);
        console.log(`Deleted account: ${deletedAccount}`);
    }
    else{
        res.status(404).send("No account found");
    }
}