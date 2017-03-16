import React from 'react';
import {fetchAllArticles} from '../actions/actions';
import {connect} from 'react-redux';
import ArticleCard from './ArticleCard';

const ArticleList = React.createClass({
  componentDidMount() {
    this.props.getArticles();
  },
  render () {
    return (
      <div id='ArticleList'>
        {this.props.articles.map((article, i) => {
          return <ArticleCard 
                  key={i}
                  title={article.title}
                  votes={article.votes}
                  comments={article.comments}
                  />
        })}
      </div>
    );
  }
});

function mapDispatchToProps (dispatch) {
  return {
    getArticles: () => {
      dispatch(fetchAllArticles())
    }
  }
}

function mapStateToProps (state) {
  return {
    articles: state.articles.articles
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)