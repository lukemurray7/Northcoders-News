import * as types from '../actions/types';

const initialState = {
  data: [],
  loading: false,
  error: null
};

function topicsReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_TOPICS_REQUEST: {
      return Object.assign({}, prevState,{
        loading: true,
      });
    }
    case types.FETCH_TOPICS_SUCCESS: {
      return Object.assign({}, prevState, {
        data: action.data,
        loading: false
      });
    }
    case types.FETCH_TOPICS_ERROR: {
      return Object.assign({}, prevState, {
        error: action.data,
        loading: false
      });
    }
    default:
      return prevState;
  }
}

export default topicsReducer;