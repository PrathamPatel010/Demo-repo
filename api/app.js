require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send(`<h1>Mock API Up & Running</h1>`);
})

app.get('/name',(req,res)=>{
    res.json({secret:process.env.JWT_SECRET,frontend:process.env.frontend_url});
})
