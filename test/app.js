const express = require('express');

const app = express();

app.get( '/' ,(req ,res)=> {

    res.send('<h1>This is a heading </h1>')
    
})

app.listen(3000 , ()=> {
    console.log("server is running on port 3000")
})