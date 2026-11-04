// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
import {createAccount, getSections} from "./services/accountServices.js";

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


//getting the langauges
getSections(1, "l");

//getting the repositories
getSections(1, "r");

//testing if no sections was selected
getSections(1, "c");