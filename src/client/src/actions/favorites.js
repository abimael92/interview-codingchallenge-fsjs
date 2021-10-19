import { FETCH_ALL, CREATE } from '../constants/actionTypes';

import * as api from '../api/index';

//Action Creators
export const getFavorites = () => async (dispatch) => { // function in function for sync await
    try {
        const { data } = await api.fetchFavorites();
        console.log(data);

        dispatch({ type: FETCH_ALL, payload: data });

    } catch (error) {
        console.log(error.message);
    }
};

export const createFavorites = (favorites) => async (dispatch) => {
    try {
        const { data } = await api.createFavorites(favorites);
        console.log(data);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
