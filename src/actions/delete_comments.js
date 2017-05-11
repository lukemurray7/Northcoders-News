import * as types from './types';
import axios from 'axios';
import { ROOT } from '../../config';

export function deleteComment (id) {
  return function (dispatch) {
    dispatch(deleteCommentRequest());
    axios
      .delete(`${ROOT}/comments/${id}`)
      .then((res) => {
        dispatch(deleteCommentSuccess(id));
      })
      .catch((err) => {
        dispatch(deleteCommentError(err));
      });
  };
}

export function deleteCommentRequest () {
  return {
    type: types.DELETE_COMMENT_REQUEST
  };
}

export function deleteCommentSuccess (id) {
  return {
    type: types.DELETE_COMMENT_SUCCESS,
    comment_id: id
  };
}

export function deleteCommentError (err) {
  return {
    type: types.DELETE_COMMENT_ERROR,
    data: err
  };
}