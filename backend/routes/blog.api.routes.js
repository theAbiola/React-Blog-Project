import express from 'express';
import {
    getAllPosts,
    getSpecificPost,
    postNewPost,
    patchPost,
    deletePost
} from '../controllers/blog.api.controller.js';

const router = express.Router();

//ENDPOINT 1: GET All posts
router.get("/", getAllPosts);

//ENDPOINT 2: GET a specific post by id
router.get("/:id", getSpecificPost);

//ENDPOINT 3: POST a new post
router.post("/", postNewPost);

//ENDPOINT 4: PATCH a post when you just want to update one parameter
router.patch("/:id", patchPost);

//ENDPOINT 5: DELETE a specific post by providing the post id.
router.delete("/:id", deletePost);

export default router;