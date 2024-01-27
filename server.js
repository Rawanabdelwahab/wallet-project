import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors'
import bodyparser from 'body-parser'
import transactionRouter from "./routes/transaction.js";
dotenv.config()
mongoose.connect(process.env.mongoConnectionUrl)
const app=express()
app.use(bodyparser.json())
app.use(cors())
app.use('/', transactionRouter)
app.listen(process.env.port,()=>{
    console.log(`started on http://localhost:${process.env.port}`)
})