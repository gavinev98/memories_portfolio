//all logic will be stored in the controllers.
//we can now import our model from the model folder for PostMessage
import PostMessage from '../models/postsMessage.js'

export const getPost = async (req, res) => {

    try {
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);

    } catch(errror) {
        res.status(404).json({ message : error.message });

    }
    

};


export const createPost = (req, res) => {

    res.send('create a post');
};