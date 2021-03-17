import mongoose from 'mongoose';



//first we need to create a mongoose schema
const postSchema = mongoose.Schema({

    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

});

//turning the schema above into a model.

const PostMessage = mongoose.model('PostMessage', postSchema);


export default PostMessage;