import * as types from '../actions/types';

const initialState = {
  topics: [],
  loading: false,
  error: null
};

function topicsReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  if (action.type === types.FETCH_TOPICS_REQUEST) {
    newState.loading = true;
  }

  if (action.type === types.FETCH_TOPICS_SUCCESS) {
    newState.topics = action.data;
    newState.loading = false;
  }

  if (action.type === types.FETCH_TOPICS_ERROR) {
    newState.error = action.data;
    newState.loading = false;
  }
  return newState;
}

export default topicsReducer;



// reducer for articles, comments, topics