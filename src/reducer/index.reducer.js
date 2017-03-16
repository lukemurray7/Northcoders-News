import {combineReducers} from 'redux';

import articlesReducer from './articles.reducer';
import commentsReducer from './comments.reducer';
import topicsReducer from './topics.reducer';

export default combineReducers({

    articles: articlesReducer,
    comments: commentsReducer,
    topics: topicsReducer
})