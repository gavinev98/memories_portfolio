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

    } catch (error) {
        //output error if there is one.
        console.log(error.message)

        
    }
}

