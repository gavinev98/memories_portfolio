import axios from 'axios';

//setting up a url which is the endpoint to all our posts.
const url = 'http://localhost:5000/posts';

//creating function to fetch posts via axios.
export const fetchPosts = () => axios.get(url);
//creating api request to create a new post.
export const createPost = (newPost) => axios.post(url, newPost);
//creating api request to update a post.
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
//creating api request to delete a post
export const deletePost = (id) => axios.delete(`${url}/${id}`);
//creating api request to like a post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);