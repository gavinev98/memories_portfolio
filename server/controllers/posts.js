//all logic will be stored in the controllers.
//we can now import our model from the model folder for PostMessage
import PostMessage from '../models/postsMessage.js'
import { Mongoose } from 'mongoose';

export const getPost = async (req, res) => {
        //retrieving posts from mongo.
    try {
        console.log("get post function actioned.");
        const postMessages = await PostMessage.find();

        console.log(postMessages);

        res.status(200).json(postMessages);
        console.log("status 200!" + postMessages);
        
    } catch(error) {
        res.status(404).json({ message : error.message });

    }
    

};


export const createPost =  async (req, res) => {
    //with posts requests you have acces to request.body.
    const post = req.body;

    const newPost = new PostMessage(post);

        try {

            //link to different http codes depending on request.
            // https://www.restapitutorial.com/httpstatuscodes.html

           await newPost.save();

           res.status(201).json(newPost);
           console.log("post created!");
            
        } catch (error) {

            res.status(409).json({ error: error.message });
        }
   
};


export const updatePost = async (req, res) => {
        // posts/12
        //we first need to retrieve the id from the request which
        //has been setup in the routes.
       const { id: _id } = req.params;

       if(!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

       





}