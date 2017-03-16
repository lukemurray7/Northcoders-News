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
      <div className="container">
        {this.generateArticles(this.filterArticles(this.props.articles, this.props.params.topic))}
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
          article_id={article._id}
        />
      );
    });
  },
  filterArticles (articles, topic) {
    articles = articles.sort((a, b) => {
      return b.votes - a.votes;
    });
    if (!topic || topic === 'all topics') return articles;
    return articles.filter((article) => {
      return article.belongs_to === topic;
    });
  }
});

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

ArticleList.propTypes = {
  getArticles: React.PropTypes.func.isRequired,
  articles: React.PropTypes.array.isRequired
};




export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);