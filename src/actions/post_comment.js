import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function postComment (articleId, comment) {
  return function (dispatch) {
      dispatch(postCommentRequest());
      axios
        .post(`${ROOT}/articles/${articleId}/comments`,{
          'comment': comment
        })
        .then((res) => {
          dispatch(postCommentSuccess(res.data.comment));
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
    data: res
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