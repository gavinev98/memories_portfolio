import React from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {

     //calling styles class.
     const classes = useStyles();


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
            value={}
            onChange={}/>
            </form>
        </Paper>
    );
};

export default Form;