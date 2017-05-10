import * as types from '../actions/types';

const initialState = {
  byId: {},
  loading: false,
  error: null
};

function commentsReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.VOTE_COMMENT_REQUEST:
    case types.FETCH_COMMENTS_REQUEST: {
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    }
    case types.VOTE_COMMENT_SUCCESS: {
     let newState = Object.assign({}, prevState);
            let myState = Object.assign({}, newState.byId);
            if (action.vote === 'up') {
                myState[action.comment_id].votes++;
            }
            if (action.vote === 'down') {
                myState[action.comment_id].votes--;
            }
            newState.byId = myState;
            return newState;
    }
    case types.FETCH_COMMENTS_SUCCESS: {
     return Object.assign({}, prevState, {
        data: action.data,
        byId: normaliseData(action.data),
        loading: false
      });
    }
    case types.FETCH_COMMENTS_ERROR: {
      const newState = Object.assign({}, prevState);
      newState.error = action.data;
      newState.loading = false;
      return newState;
    }
    default:
      return prevState;
  }
}

function normaliseData (data) {
  return data.reduce(function (acc, item) {
    acc[item._id] = item;
    return acc;
  }, {});
}

export function getCommentsSortByVote (state) {
  return Object.keys(state.comments.byId)
    .reduce(function (acc, id) {
      return acc.concat(state.comments.byId[id]);
    }, [])
    .sort(function (a, b) {
      return b.votes - a.votes;
    });
}

export default commentsReducer;