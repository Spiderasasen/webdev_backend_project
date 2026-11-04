import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {createAccount} from "./services/accountServices.js";
import {
    apiCreateAccount,
    apiDeleteAccount,
    apiGetAllAccounts, apiGetLanguages,
    apiGetOneAccount, apiGetRepositories, apiUpdateAccount
} from "./controller/accountController.js";

//creating the account first
let account = createAccount("bob",
    "bobWasHere",
    [
        "learning_C#",
        "Company_dataset",
        "backend_with_datasets"
    ],
    {
        "sql": 50,
        "python": 20,
        "go": 15,
        "C#": 15
    });

//establishing the connection
const app = express();
const port = 9004;
app.use(bodyParser.json());
app.use(cors());

//http calls

/*Full Frontend*/
app.get('/account/:accountId', apiGetOneAccount);
app.post('/account', apiCreateAccount);
app.put('/account/:accountId', apiUpdateAccount);
app.get('/account/:accountId', apiGetLanguages);
app.get('/account/:accountId', apiGetRepositories);

/*Testing Backend*/
app.get('/accounts', apiGetAllAccounts);
app.delete('/account/:accountId', apiDeleteAccount);

//starting the server
app.listen(port, startUpQuote)
    .on('error', (error) => {
        console.error(error);
    })


//function that tells the server is running
function startUpQuote(){
    console.log("server starting up...")
}