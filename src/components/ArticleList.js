import React from 'react';
import {fetchAllArticles} from '../actions/actions';
import {connect} from 'react-redux';
import ArticleCard from './ArticleCard';

const ArticleList = React.createClass({
  componentDidMount () {
    this.props.getArticles ();
  },
  render () {
    return (
      <div id='ArticleList'>
        {this.generateArticles(this.props.articles)}
      </div>
    );
  },
  generateArticles (articles) {
    return articles.map((article, i) => {
      return ( 
        <ArticleCard key={i}
          title={article.title}
          votes={article.votes}
          comments={article.comments}
        />
      );
    });
  }
});

ArticleList.propTypes = {
  getArticles: React.PropTypes.func.isRequired,
  articles: React.PropTypes.array.isRequired
};

function mapDispatchToProps (dispatch) {
  return {
    getArticles: () => {
      dispatch(fetchAllArticles());
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles.data
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);