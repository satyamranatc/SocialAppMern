import { Router } from "express";
import User from "../models/User.js";

const router = Router();

router.get('/',async(req,res)=>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});


router.post('/', async(req,res)=>{
    console.log("Hi Post")
    let {FullName,username,password,avtar} = req.body;

    const user = new User({FullName,username,password,avtar});

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});


router.post('/signin', async(req,res)=>{
    let {username,password} = req.body;

    const user = await User.findOne({username});
    if(!user){
        return res.status(401).json({message: 'Invalid username'});
    }
    const isMatch =  user.password == password;
    if(!isMatch){
        return res.status(401).json({message: 'Invalid password'});
    }
    res.json({
        message: 'Logged in successfully',
        user: user
    });

   
});

// Export:
export default router;

