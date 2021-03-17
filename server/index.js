import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'


//set up the app and we can now use app to access different methods,
const app = express();


//setting up middleware to connect our routes to application
app.use('/posts', postRoutes);

//setting up bodyParser so that we can properly send a request.
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
//setting up cors.
app.use(cors());

//setting up mongoDB with cloud atlas version.
const CONNECTION_URL = 'mongodb+srv://gavinev98:fire1234@cluster0.bxox6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server running on port: $ ${PORT}`)))
    .catch((error) => console.log(error.message));


    //ensures that we get no error warning in the console.
mongoose.set('useFindAndModify', false);