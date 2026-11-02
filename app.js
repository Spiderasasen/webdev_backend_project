// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
import {createAccount, getAllAccounts, deleteAccount} from "./services/accountServices.js";

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

getAllAccounts();

deleteAccount(1);

getAllAccounts();