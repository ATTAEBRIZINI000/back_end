const express = require("express"); 
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../controllers/post');
const upload = require("../middleware/upload");
const router = express.Router();

// Create a new post
router.post('/', upload.single("ImageUrl"),createPost);

// Get all posts
router.get('/', getAllPosts);

// Get a single post by ID
router.get('/:id', getPostById);

// Update a post by ID
router.patch('/:id', updatePost);

// Delete a post by ID
router.delete('/:id', deletePost);

module.exports = router
