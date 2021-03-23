import React from 'react';
import Post from './Post/Post';

import { useSelector } from 'react-redux';

import useStyles from './styles';

const Posts = () => {

        //calling styles class.
        const classes = useStyles();

        const posts = useSelector((state) => state.posts);

    return (
        <>
        <h1> Posts </h1>
        <Post />
        <Post />
        </>
    );
};

export default Posts;