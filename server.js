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

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.listen(8000, ()=>{
    console.log(`listening on port ${port}, running as ${process.env.NODE_ENV}`)
})