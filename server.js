const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

dotenv.config({
    path : './config.env'
})

const port = process.env.PORT || 8000

const app = express()

//middleware
app.use('/api/v1/profile/', require('./routes/profile.js'))

//handle production 
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static(__dirname+'/public/'))
    //handle sigle page app
    app.get(/.*/, (req, res) =>{ //if the path isnt available path, redirect to
        res.sendFile(__dirname+"/public/index.html")
    })
}

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.listen(8000, ()=>{
    console.log(`listening on port ${port}, running as ${process.env.NODE_ENV}`)
})