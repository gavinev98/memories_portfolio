import * as api from '../api';

// Action Creators
//this will be an asynchronous so we will need two AC.

//redux thunk allows us to specify an additional arrow function
//this will be an asynchronous action creator as we need to fetch the data.
const getPosts = () => async (dispatch) => {
    const action = { type: 'FETCH_ALL' , payload: []}

    dispatch(action);
}

