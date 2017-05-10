import React from 'react';
import { connect } from 'react-redux';
import { fetchAllArticles } from '../actions/fetch_articles';
import { fetchAllComments } from '../actions/fetch_comments';
import { voteArticle } from '../actions/vote_article';
import { getCommentsSortByVote } from '../reducer/comments.reducer';
import EachArticle from './EachArticle';
import { voteComment } from '../actions/vote_comment';
import Comments from './Comments';


const Article = React.createClass({
	componentDidMount() {
		if (Object.keys(this.props.articles).length === 0) {
			this.props.getArticles();
		}
		this.props.getComments(this.props.params.article_id);
	},
	render() {
		if (Object.keys(this.props.articles).length === 0) return (<p>Loading</p>);

		return (
			<section className="container">
				{this.generateArticle(this.props.articles[this.props.params.article_id])}
				<div className="content">
					<div className="spacer">
						<div classID="siteTable" className="sitetable linklisting">
							{this.generateComments(this.props.comments)}
						</div>
					</div>
				</div>
			</section>
		);
	},
	generateComments(comments) {
		return comments.map((comment, i) => {
			return (
				<Comments
					key={i}
					voteComment={this.props.voteComment}
					body={comment.body}
					votes={comment.votes}
					id={comment._id}
					createdBy={comment.created_by}
				/>
			);
		});
		// 583412915905f02e4c8e6dfd
	},
	generateArticle(article) {
		return (
			<EachArticle title={article.title}
				body={article.body}
				created_by={article.created_by}
				votes={article.votes}
				article_id={article._id}
				voteArticle={this.props.voteArticle}
				createdBy={article.created_by}
			/>
		);
	}
});



function mapDispatchToProps(dispatch) {
	return {
		getComments: (param) => {
			dispatch(fetchAllComments(param));
		},
		voteArticle: (id, vote) => {
			dispatch(voteArticle(id, vote));
		},
		getArticles: () => {
			dispatch(fetchAllArticles());
		},
		voteComment: (id, vote) => {
			dispatch(voteComment(id, vote));
		}
	};
}

function mapStateToProps(state) {
	return {
		articles: state.articles.byId,
		comments: getCommentsSortByVote(state)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);


{/*<ul className="box">Comments:
					{this.generateComments(this.props.comments)}
				</ul>*/}

{/*<li className="box" key={i}>
					<VoteButtons votes={comment.votes}
						voteArticle={this.props.voteArticle.bind(null, comment._id)}
					/>
					<p>Text:{comment.body}</p>
					<span>Created by: {comment.created_by}</span>
					<span>Votes: {comment.votes}</span>
				</li>*/}