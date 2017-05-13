import * as types from '../actions/types';

const initialState = {
  byId: {},
  loading: false,
  error: null
};

function articlesReducer (prevState = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLES_REQUEST: {
      return Object.assign({}, prevState, {
        loading: true,
        error: null
      });
    }
    case types.VOTE_ARTICLE_REQUEST: {
      return Object.assign({}, prevState, {
        error: null
      });
    }
    case types.VOTE_ARTICLE_SUCCESS: {
     return Object.assign({}, prevState, {
        byId: Object.assign({}, prevState.byId, {
          [action.data._id]: Object.assign({}, prevState.byId[action.data._id], {
          votes: action.data.votes
          })
        }),
        loading: false,
        error: null
      });
    }
    case types.VOTE_ARTICLE_ERROR: {
     return Object.assign({}, prevState, {
        byId: {},
        loading: false,
        error: action.data
      });
    }
    case types.FETCH_ARTICLES_SUCCESS: {
     return Object.assign({}, prevState, {
        byId: normaliseData(action.data),
        loading: false
      });
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

function normaliseData (data) {
  return data.reduce(function (acc, item) {
    acc[item._id] = item;
    return acc;
  }, {});
}

export function getTopArticles (state, num) {
  return Object.keys(state.articles.byId)
    .reduce(function (acc, id) {
      return acc.concat(state.articles.byId[id]);
    }, [])
    .sort(function (a, b) {
      return b.votes - a.votes;
    })
    .slice(0, num);
}

export default articlesReducer;