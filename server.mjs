import express from 'express'
import mongoose from 'mongoose'
console.log('Muhammad Fahad Siddiqui ')

// App Config
const app = express()
const PORT= process.env.port || 7000
const db_url = 'mongodb+srv://admin:admin@cluster0.zkqln.mongodb.net/tinderdb?retryWrites=true&w=majority'
//Middleware

//DB Config
mongoose.connect(db_url
    // ,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,}
    )
//Api Endpoints
app.get('/',(res,req)=> res.status(200).send('Hello Fahad Bhai'))

//Listener
app.listen(PORT,()=>console.log(`YOUR APP IS BEiNG LISTENED AT PORT ${PORT}`) )