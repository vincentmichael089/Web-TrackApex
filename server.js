const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

const app = express()

app.listen(8000, ()=>{
    console.log(`listening on port `)
})