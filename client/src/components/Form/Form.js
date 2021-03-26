import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {

     //calling styles class.
     const classes = useStyles();

     //creating a state for the post
     const [postData, setPostData] = 
     useState({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile : '',
     });


     //creating handler function for onsubmit
     const handleSubmit = () => {


     }


    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={classes.from} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a Memory</Typography>
            <TextField 
            name="creator" 
            variant="outlined" 
            label="Creator" 
            fullWidth 
            value={postData.creator}
            onChange={(e) => setPostData({ ...postData, creator: e.target.value})}/>
            </form>
        </Paper>
    );
};

export default Form;