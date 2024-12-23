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
    const user = new User(req.body);

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

// Export:
export default router;

