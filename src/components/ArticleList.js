import React from 'react';
import {fetchAllArticles, voteArticle} from '../actions/actions';
import {connect} from 'react-redux';
import ArticleCard from './ArticleCard';
import {getTopArticles} from '../reducer/articles.reducer';

const ArticleList = React.createClass({
  componentDidMount () {
    this.props.getArticles ();
  },
  render () {
    return (
      <div className="spacer">
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
          voteArticle={this.props.voteArticle}
        />
      );
    });
  },
  filterArticles (articles, topic) {
    if (!topic || topic === 'all-topics') return articles;
    return articles.filter((article) => {
      return article.belongs_to === topic;
    });
  }
});

function mapDispatchToProps (dispatch) {
  return {
    getArticles: () => {
      dispatch(fetchAllArticles());
    },
    voteArticle: (id, vote) => {
      dispatch(voteArticle(id, vote));
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: getTopArticles(state, 50)
  };
}

ArticleList.propTypes = {
  getArticles: React.PropTypes.func.isRequired,
  articles: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);