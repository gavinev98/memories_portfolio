//all routes related to posts.

import express from 'express';


//setting up router with express/
const router = express.Router();


//setting up our first route for the default page.
//send a request and recieve a response.
router.get('/', (req, res) => {

    res.send('This Works!');
});

export default router;