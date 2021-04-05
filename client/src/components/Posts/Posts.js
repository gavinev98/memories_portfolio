import React from 'react';
import Post from './Post/Post';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles';

const Posts = ({ setCurrentId }) => {

        //calling styles class.
        const classes = useStyles();

        //using selector functionality to retrieve state.
        const posts = useSelector((state) => state.posts);
       
        

    return (
       !posts.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6}> 
                <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
       )
    );
};

export default Posts;