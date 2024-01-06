require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const app = express();

app.listen(PORT,()=>{
    console.log(`Server is listening on port 3000`);
})

app.get('/',(req,res)=>{
    res.send(`<h1>Mock API Up & Running</h1>`);
})

app.get('/name',(req,res)=>{
    res.json({secret:process.env.jwt_secret,frontend:process.env.frontend_url});
})