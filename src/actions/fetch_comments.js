import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchAllComments (article_id) {
    // thunk action
    return function (dispatch) {
        dispatch(fetchCommentsRequest());
        axios
            .get(`${ROOT}/articles/${article_id}/comments`)
            .then(res => {
                dispatch(fetchCommentsSuccess(res.data.comments));
            })
            .catch(err => {
                dispatch(fetchCommentsError(err)); 
            });
    };
}  

export function fetchCommentsRequest () {
    return {
        type: types.FETCH_COMMENTS_REQUEST
    };
}
export function fetchCommentsSuccess (Comments) {
    return {
        type: types.FETCH_COMMENTS_SUCCESS,
        data: Comments
    };
}
export function fetchCommentsError (err) {
    return {
        type: types.FETCH_COMMENTS_ERROR,
        data: err
    };
}

