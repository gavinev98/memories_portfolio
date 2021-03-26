import axios from 'axios';

//setting up a url which is the endpoint to all our posts.
const url = 'http://localhost:5000/posts';

//creating function to fetch posts via axios.
export const fetchPosts = () => axios.get(url);