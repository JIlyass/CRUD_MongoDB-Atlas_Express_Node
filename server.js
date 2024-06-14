const express = require('express');
const app = express();
const connectionDB = require("./DB/connectionDB");



const studentsRouter= require('./Routes/studentsRoutes')
app.use(express.urlencoded({extended:false}));
app.use(express.json())
require('dotenv').config;
const connectionString = "mongodb+srv://admin:admin@cluster0.opirw02.mongodb.net/db1?retryWrites=true&w=majority&appName=Cluster0";
// const connectionString = process.env.DB_MONGO_1;

app.use('/students',studentsRouter);

const startServer =async (connectionString)=>{
    try{
        await connectionDB(connectionString);
        app.listen(4000,()=>{
            console.log("connection rétablie dans le port 4000 :) ");
        }) 
    }catch(err){
        console.log("erreur : "+err);
    }
}

startServer(connectionString) 