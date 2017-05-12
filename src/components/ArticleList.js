import React from 'react';
import { fetchAllArticles } from '../actions/fetch_articles';
import { voteArticle } from '../actions/vote_article';
import { connect } from 'react-redux';
import ArticleCard from './ArticleCard';
import { getTopArticles } from '../reducer/articles.reducer';

const ArticleList = React.createClass({
  componentDidMount () {
    this.props.getArticles();
  },
  render () {
    return (
      <div className="content">
        <div className="spacer">
          <div classID="siteTable" className="sitetable linklisting">
            {this.generateArticles(this.filterArticles(this.props.articles, this.props.params.topic))}
          </div>
        </div>
      </div>
    );
  },
  generateArticles (articles) {
    if (articles) {
      return articles.map((article, i) => {
        return (
          <ArticleCard key={i}
            num={i + 1}
            title={article.title}
            votes={article.votes}
            comments={article.comments}
            article_id={article._id}
            voteArticle={this.props.voteArticle}
            createdBy={article.created_by}
          />
        );
      });
    } else
    return (
      <i className="fa fa-cog" aria-hidden="true"></i>
    );
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