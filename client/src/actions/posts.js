import * as api from '../api';

// Action Creators
//this will be an asynchronous so we will need two AC.

//redux thunk allows us to specify an additional arrow function
//this will be an asynchronous action creator as we need to fetch the data.
 export const getPosts = () => async (dispatch) => {

    try {
        //data represents the posts.
        const { data } = await api.fetchPosts();

      
        //dispatching the get post if sucessfully retrieved.
        dispatch({type : 'FETCH_ALL', payload: data });
        console.log("postings" + data);

    } catch (error) {
        //output error if there is one.
        console.log(error.message)

        
    }
}


//asynchronous function for creation of post.
export const createPost = (post) => async (dispatch) => {
    try {

        const { data } = await api.createPost(post);
        //dispatch creation of post to reducer.
        dispatch({ type: 'CREATE', payload: data})


    } catch (error) {
        console.log(error);
    }
}


//setting up the updatePost action.
export const updatePost = (id, post) => async (dispatch) => {
    
    try {

        const { data } = await api.updatePost(id,post);

        dispatch({ type: 'UPDATE_POST', payload: data });
        
    } catch (error) {

        console.log(error);
        
    }
}


//setting up the deletePost action.
export const deletePost = (id) => async (dispatch) => {

    try {

        await api.deletePost(id);
        
        dispatch({ type: 'DELETE_POST', payload: id});
        
    } catch (error) {
        console.log(error);
    }
}


//setting uo the likePost action
export const likePost = (id) => async (dispatch) => {

    try {
        //making api request.
        await api.likePost(id);
        //dispatching id to reducer
        dispatch({ type: 'LIKE_POST', payload: id})

    } catch (error) {
        console.log(error);    
    }
}
