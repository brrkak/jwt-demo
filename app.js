const express = require('express');
const app =  express();
const jwt = require('jsonwebtoken');
const env = require('dotenv').config();

app.listen(process.env.PORT)


app.get('/', (req,res) => {
    const token = jwt.sign({
        foo:'bar'
    }, process.env.PRIVATE_KEY, {
        expiresIn : '5m',
        issuer: "janghoon"
    })
   res.cookie('token', token,{
     httpOnly : true
   })
   console.log(token);
   res.status(200).json({
    token : token
   })
})