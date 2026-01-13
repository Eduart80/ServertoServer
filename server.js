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
       
        res.json({"fact": getData.data.text})
    }catch(error){
        if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
      res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
    } else {
      console.error('Network Error:', error.message);
      res.status(500).json({ message: "Could not fetch fun fact" });
    }
    }
})

app.listen(PORT, ()=>{console.log(`Server active on port ${PORT}`)})