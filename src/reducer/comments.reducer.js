import * as types from '../actions/types';

const initialState = {
  byId: {},
  loading: false,
  error: null,
  textInput: ''
};

function commentsReducer(prevState = initialState, action) {
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
    case types.UPDATE_TEXT_INPUT: {
      const newState = Object.assign({}, prevState);
      newState.textInput = action.data;
      return newState;
    }

    case types.POST_COMMENT_SUCCESS: {
      const newState = Object.assign({}, prevState);
      let newById = Object.assign({}, newState.byId);
      console.log(action.data[0])
      newById[action.data[0]._id] = action.data[0];
      newState.byId = newById;
      newState.loading = false;
      newState.textInput = '';
      return newState;
    }
    case types.DELETE_COMMENT_REQUEST: {
      const newState = Object.assign({}, prevState);
      newState.loading = true;
      return newState;
    }
    case types.DELETE_COMMENT_SUCCESS: {
      const newState = Object.assign({}, prevState);
      let newComments = Object.assign({}, newState.byId);
      delete newComments[action.comment_id];
      newState.byId = newComments;
      newState.fetching = false;
      return newState;
    }
    case types.DELETE_COMMENT_ERROR: {
      const newState = Object.assign({}, prevState);
      newState.error = action.err;
      newState.loading = false;
      return newState;
    }
    default:
      return prevState;
  }
}

function normaliseData(data) {
  return data.reduce(function (acc, item) {
    acc[item._id] = item;
    return acc;
  }, {});
}

export function getCommentsSortByVote(state) {
  return Object.keys(state.comments.byId)
    .reduce(function (acc, id) {
      return acc.concat(state.comments.byId[id]);
    }, [])
    .sort(function (a, b) {
      return b.votes - a.votes;
    });
}

export default commentsReducer;