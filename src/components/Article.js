import React from 'react';
import {connect} from 'react-redux';
import {fetchAllComments} from '../actions/actions';
import ArticleCard from './ArticleCard';

const Article = React.createClass({
	componentDidMount () {
		this.props.getComments(this.props.params.article_id);
	},
	render () {
    return (
			<section className="container">
				{this.generateArticle(this.props.articles, this.props.params.article_id)}
				<ul>
					{this.generateComments(this.sortComments(this.props.comments))}
				</ul>
			</section>
    );
  },
	generateComments (comments) {
		return comments.map((comment, i) => {
			return (
				<li key={i}>
					<p>Text:{comment.body}</p>
					<span>Created by: {comment.created_by}</span>
					<span>Votes: {comment.votes}</span>
				</li>
			);
		});
	},
	generateArticle (articles, id) {
		let article = articles.find((article) => {
			return article._id === id;
		});

		return (
			<ArticleCard title={article.title}
				body={article.body}
				created_by={article.created_by}
				votes={article.votes}
				article_id={id}
			/>
		);
	},
	sortComments (comments) {
		return comments.sort((a, b) => {
			return b.votes - a.votes;
		});
	}
});

function mapDispatchToProps (dispatch) {
  return {
    getComments: (param) => {
      dispatch(fetchAllComments(param));
    }
  };
}

function mapStateToProps (state) {
  return {
    articles: state.articles.data,
    comments: state.comments.data
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);