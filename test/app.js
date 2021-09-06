const express = require('express');
const { dirname } = require('path');
const path = require('path')

const app = express();
app.use(express.static(path.join(__dirname, '../public') ))

app.get( '/' ,(req ,res)=> {

    res.send('<h1>This is a heading </h1>')
    
})

app.get('/show' ,(req, res)=> {
    res.render('show')

} )

app.get('/another' ,(req,res)=> {
    res.send('another file text');
})


app.get('*', (req,res)=> {
    res.send("<h1>this url in invalid please enter a valid url</h1>")
})
app.listen( process.env.PORT, ()=> {
    console.log("server is running on port 3000")
    console.log(__dirname)
})

