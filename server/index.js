import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


//set up the app and we can now use app to access different methods,
const app = express();


//setting up bodyParser so that we can properly send a request.
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
//setting up cors.
app.use(cors());

//setting up mongoDB with cloud atlas version.
const CONNECTION_URL = 'mongodb+srv://gavinev98:fire1234@cluster0.bxox6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true});