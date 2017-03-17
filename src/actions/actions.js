import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function voteArticle (article_id, vote) {
    return function (dispatch) {
        dispatch(voteArticleRequest());
        axios
            .put(`${ROOT}/articles/${article_id}?vote=${vote}`)
            .then((res) => {
                dispatch(voteArticleSuccess(res.data));
            })
            .catch((error) => {
                dispatch(voteArticleError(error.message));
            });
    };
}

export function voteArticleRequest () {
    return {type: types.VOTE_ARTICLE_REQUEST};
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
        error
    };
}

export function voteComment (comment_id, vote) {
  return function (dispatch) {
    dispatch(voteCommentRequest());
    axios
      .put(`${ROOT}/comments/${comment_id}?vote=${vote}`)
      .then((res) => {
        dispatch(voteCommentSuccess(res.data));
      })
      .catch((error) => {
        dispatch(voteCommentError(error.message));
      });
  };
}

export function voteCommentRequest () {
  return {type: types.VOTE_COMMENT_REQUEST};
}

export function voteCommentSuccess (data) {
  return {
    type: types.VOTE_COMMENT_SUCCESS,
    data
  };  
}

export function voteCommentError (error) {
  return {
    type: types.VOTE_COMMENT_ERROR,
    error
  };
}


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

