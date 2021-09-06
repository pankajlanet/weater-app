const express = require('express');

const app = express();

app.get( '/' ,(req ,res)=> {

    res.send('<h1>This is a heading </h1>')
    
})


app.get('/another' ,()=> {
    res.send('another file text')
})

app.listen(process.env.PORT , ()=> {
    console.log("server is running on port 3000")
})