const router = require("express").Router();

const Room = require("../models/room");

router.get("/getallrooms", async(req, res)=>{
    try{
        const data = await Room.find({});
        res.json({data});
    }catch(error){
        res.status(400).json({message: error});
    };
});


module.exports = router;