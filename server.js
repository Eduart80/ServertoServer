require('dotenv').config()
const axios = require('axios');
const express = require('express')
const app = express()
const PORT = process.env.PORT

// Enabling req.body
app.use(express.json());
app.use(express.urlencoded());

// Get requests with axios //
app.get('/api/fun-fact', async (req,res)=>{
    try{
        const getData = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random')
        res.json(getData.data)
    }catch(error){
        console.log(`Error on server request ${error}`);
        res.status(500).send("Server not responding")
    }
})

app.listen(PORT, ()=>{console.log(`Server active on port ${PORT}`)})