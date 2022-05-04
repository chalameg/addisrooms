const router = require("express").Router();

const User = require("../models/user");

router.get("/getallusers", async(req, res)=>{

    try{
        const data = await User.find({});
        res.json({data});
    }catch(error){
        res.status(400).json({message: error});
    };
});

router.get("/getuser/:id", async (req, res)=>{
    const { id } = req.params;
    // console.log(id);
    try{
        const data = await User.findById(id);
        console.log(data)
        res.json({data});
    }catch(error){
        // console.log(error)
        res.status(400).json({message: error});
    };
});

router.post('/login', async(req, res) =>{

    try {
        console.log(req.body)
        const {email, password} = req.body
        const user = await User.findOne({email, password})

        if(user){
            res.send(user)
        }else{
            res.status(400).json({message: "Cannot find the user"})
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.post('/register', async(req, res) =>{
    
})

module.exports = router;