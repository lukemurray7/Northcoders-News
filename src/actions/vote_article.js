import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function voteArticle (article_id, vote) {
    return function (dispatch) {
        dispatch(voteArticleRequest());
        axios
            .put(`${ROOT}/articles/${article_id}?vote=${vote}`)
            .then((res) => {
                dispatch(voteArticleSuccess(res.data.article));
            })
            .catch((error) => {
                dispatch(voteArticleError(error.message));
            });
    };
}

export function voteArticleRequest () {
    return {
        type: types.VOTE_ARTICLE_REQUEST
    };
}

export function voteArticleSuccess (data) {
    return {
        type: types.VOTE_ARTICLE_SUCCESS,
        data
    };
    
}

export function voteArticleError (error) {
    return {
        type: types.VOTE_ARTICLE_ERROR,
        data: error
    };
}