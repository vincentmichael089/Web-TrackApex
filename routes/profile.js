const express = require('express')
const router = express.Router();
const fetch = require('node-fetch')

router.get('/:platform/:gamertag', async(req,res)=>{
    try{
        const headers = {
            'TRN-Api-Key' : process.env.TRACKER_API_KEY
        }
        const platform = req.params.platform
        const gamertag = req.params.gamertag

        const response = await fetch(`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`, {
            headers : headers //response from server
        })

        const data = await response.json() 

        if(data.errors && data.errors.length > 0){
            return res.status(404).json({message:'Profile not found!'})
        }

        res.json(data) //response to client

    }catch(err){
        console.error(err)
        res.status(500).json({
            message: 'server error'
        })
    }
})

module.exports = router;