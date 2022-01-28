import express from 'express'
import mongoose from 'mongoose'
console.log('Muhammad Fahad ')
import cards from './DBCards.mjs'
import Cors from 'cors'
// App Config
const app = express()
const PORT= process.env.port || 7000
const db_url = 'mongodb+srv://admin:admin@cluster0.zkqln.mongodb.net/tinderdb?retryWrites=true&w=majority'
//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(db_url
    // ,{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,}
    )

//Api Endpoints
app.get('/',(req,res)=> res.status(200).send('Hello Fahad Bhai'))

app.post('/tinder/cards',(req,res)=>{
    const cardDb = req.body
cards.create(cardDb,(err,data)=>{
    if (err){
        res.status(500).send(err)
    }
    else{
        res.status(201).send(data)
    }
})
})

app.get('/tinder/cards',(req,res)=>{
cards.find((err,data)=>{
    if (err){
        res.status(500).send(err)
    }
    else{
        res.status(200).send(data)
    }
})
})
//Listener
app.listen(PORT,()=>console.log(`YOUR APP IS BEiNG LISTENED AT PORT ${PORT}`) )