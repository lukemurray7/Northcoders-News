import * as types from '../actions/types';

const initialState = {
  data: [],
  loading: false,
  error: null
};

function articlesReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLES_REQUEST: {
      const newState = Object.assign({}, prevState);
      newState.loading = true;
      return newState;
    }
    case types.FETCH_ARTICLES_SUCCESS: {
      const newState = Object.assign({}, prevState);
      newState.data = action.data;
      newState.loading = false;
      return newState;
    }
    case types.FETCH_ARTICLES_ERROR: {
      const newState = Object.assign({}, prevState);
      newState.error = action.data;
      newState.loading = false;
      return newState;
    }
    default:
      return prevState;
  }
}

export default articlesReducer;