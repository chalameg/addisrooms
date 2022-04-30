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

router.get("/getroom/:id", async (req, res)=>{
    const { id } = req.params;
    // console.log(id);
    try{
        const data = await Room.findById(id);
        // console.log(data)
        res.json({data});
    }catch(error){
        // console.log(error)
        res.status(400).json({message: error});
    };
});



module.exports = router;