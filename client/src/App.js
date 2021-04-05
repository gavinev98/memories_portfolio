import React, { useState, useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memories from '../src/images/memories_image.png';

import useStyles from './styles';

//importing components
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import { getPosts } from './actions/posts';

//importing hooks
//this will be used to dispatch and action.
import { useDispatch } from 'react-redux';

const App = () => {

    //getting and setting the current ID.
    const [currentID, setCurrentID] = useState(null);

    //calling styles class.
    const classes = useStyles();

    //defining the dispatch.
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (

        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center" > Memories </Typography>
                    <img className={classes.image} src={memories} alt="memories" height="60" />

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentID={setCurrentID} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Form currentID={currentID} setCurrentID={setCurrentID} />  
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;