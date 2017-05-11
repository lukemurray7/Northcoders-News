import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function postComment (articleId, comment) {
  return function (dispatch) {
      // thunk action
        // wraps async function
      dispatch(postCommentRequest());
      axios
        .post(`${ROOT}/articles/${articleId}/comments`,{
          'comment': comment
        })
        .then((res) => {
          console.log(res)
          dispatch(postCommentSuccess(res));
        })
        .catch(err => {
          dispatch(postCommentError(err));
        });
    };
}

export function postCommentRequest () {
  return {
    type: types.POST_COMMENT_REQUEST
  };
}

export function postCommentSuccess (res) {
  return {
    type: types.POST_COMMENT_SUCCESS,
    data: res.data.comment
  };
}

export function postCommentError (err) {
  return {
    type: types.POST_COMMENT_ERROR,
    data: err
  };
}


export function updateTextInput (str) {
  return {
    type: types.UPDATE_TEXT_INPUT,
    data: str
  };
}