import { Router } from "express";
import Post from "../models/Post.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const post = new Post(req.body);
    try{
        const newPost = await post.save();
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
});

// Export
export default router;