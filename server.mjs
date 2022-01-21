import express from 'express'
import mongoose from 'mongoose'
console.log('Muhammad Fahad Siddiqui ')

// App Config
const app = express()
const PORT= process.env.port || 7000

//Middleware

//DB Config

//Api Endpoints
app.get('/',(res,req)=> res.status(200).send('Hello Fahad Bhai'))

//Listener
app.listen(PORT,()=>console.log(`YOUR APP IS BEiNG LISTENED AT PORT ${PORT}`) )