import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function voteComment (comment_id, vote) {
  return function (dispatch) {
    dispatch(voteCommentRequest());
    axios
      .put(`${ROOT}/comments/${comment_id}?vote=${vote}`)
      .then((res) => {
        dispatch(voteCommentSuccess(comment_id, vote, res));
      })
      .catch((error) => {
        dispatch(voteCommentError(error.message));
      });
  };
}

export function voteCommentRequest () {
  return {type: types.VOTE_COMMENT_REQUEST};
}

export function voteCommentSuccess (comment_id, vote, res) {
  return {
    type: types.VOTE_COMMENT_SUCCESS,
    comment_id,
    vote,
    res
  };  
}

export function voteCommentError (error) {
  return {
    type: types.VOTE_COMMENT_ERROR,
    data: error
  };
}
