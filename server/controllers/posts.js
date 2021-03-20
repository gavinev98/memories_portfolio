//all logic will be stored in the controllers.
//we can now import our model from the model folder for PostMessage
import PostMessage from '../models/postsMessage.js'

export const getPost = async (req, res) => {
        //retrieving posts from mongo.
    try {
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);

    } catch(errror) {
        res.status(404).json({ message : error.message });

    }
    

};


export const createPost =  async (req, res) => {
    //with posts requests you have acces to request.body.
    const post = req.body;

    const newPost = new PostMessage(post);

        try {

           await newPost.save();

           res.status(201).json(newPost);
            
        } catch (error) {

            res.status(409).json({ error: error.message });
        }
   
};