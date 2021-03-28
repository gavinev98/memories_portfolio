import React from 'react';
import Post from './Post/Post';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';

const Posts = () => {

        //calling styles class.
        const classes = useStyles();

        //using selector functionality to retrieve state.
        const posts = useSelector((state) => state.posts);
        console.log(posts);
        

    return (
       !posts.length ? <CircularProgress /> : (
        <Grid>

        </Grid>
       )
    );
};

export default Posts;