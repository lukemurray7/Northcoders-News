import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Article from './components/Article';
import Topic from './components/Topic';
import './css/bulma.css';
import './css/font-awesome.css';
import NotFound from './components/notFound';

const logger = createLogger()

import App from './components/App';
import ArticleList from './components/ArticleList';
import reducer from './reducer/index.reducer';



const store = createStore(reducer, applyMiddleware(thunk, logger));



ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={ArticleList} />
      <Route path='articles/:article_id' component={Article}/>
      <Route path='topics/:topic' component={Topic}/>
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
</Provider>, document.getElementById('app'));
