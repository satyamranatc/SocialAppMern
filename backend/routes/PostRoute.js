import { Router } from "express";
import Post from "../models/Post.js";

const router = Router();

// Get posts with user data populated
router.get('/', async (req, res) => {
    try {
        // Populate userId field with user details like fullName and username
        const posts = await Post.find().populate('userId', 'FullName username');
        res.json(posts);  // Send the populated posts as the response
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new post
router.post('/', async (req, res) => {
    const post = new Post(req.body);
    try {
        const newPost = await post.save();
        res.status(201).json(newPost);  // Return the newly created post
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Export
export default router;
