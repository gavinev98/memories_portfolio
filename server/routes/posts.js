//all routes related to posts.

import express from 'express';
import {getPost, createPost, updatePost} from '../controllers/posts.js'

//setting up router with express/
const router = express.Router();


//setting up our first route for the default page.
//send a request and recieve a response.
//not reached by localhost:5000/
// reached by localhost:5000/posts

router.get('/', getPost);

router.post('/', createPost);
//patch is used for updating existing documents.
//All we need to do is pass the id dynamically followed by the function.
router.patch('/:id', updatePost);


export default router;