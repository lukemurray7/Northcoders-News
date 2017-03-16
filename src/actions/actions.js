import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

// Action creator for fetching articles
export function fetchAllArticles () {
    // thunk action
    return function (dispatch) {
        dispatch(fetchArticlesRequest());
        axios
            .get(`${ROOT}/articles`)
            .then(res => {
                dispatch(fetchArticlesSuccess(res.data.articles));
            })
            .catch(err => {
                dispatch(fetchArticlesError(err)); 
            });
    };
}   


export function fetchArticlesRequest () {
    return {
        type: types.FETCH_ARTICLES_REQUEST
    };
}
export function fetchArticlesSuccess (articles) {
    return {
        type: types.FETCH_ARTICLES_SUCCESS,
        data: articles
    };
}
export function fetchArticlesError (err) {
    return {
        type: types.FETCH_ARTICLES_ERROR,
        data: err
    };
}


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


export function fetchAllTopics () {
    // thunk action
    return function (dispatch) {
        dispatch(fetchTopicsRequest());
        axios
            .get(`${ROOT}/topics`)
            .then(res => {
                dispatch(fetchTopicsSuccess(res.data.topics));
            })
            .catch(err => {
                dispatch(fetchTopicsError(err)); 
            });
    };
}  

export function fetchTopicsRequest () {
    return {
        type: types.FETCH_TOPICS_REQUEST
    };
}
export function fetchTopicsSuccess (Topics) {
    return {
        type: types.FETCH_TOPICS_SUCCESS,
        data: Topics
    };
}
export function fetchTopicsError (err) {
    return {
        type: types.FETCH_TOPICS_ERROR,
        data: err
    };
}