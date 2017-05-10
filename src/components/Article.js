import React from 'react';
import { connect } from 'react-redux';
import { fetchAllComments, voteArticle, fetchAllArticles } from '../actions/actions';
import { getCommentsSortByVote } from '../reducer/comments.reducer';
import EachArticle from './EachArticle';
import VoteButtons from './VoteButtons';

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
				<div className='thing link' key={i}>
					<p className="parent"></p>
					<div className="midcol">
						<div className="arrow up" role="button"><i onClick={voteArticle.bind(null, comment._id, 'up')} className="arrow fa fa-arrow-circle-up block" /></div>
						<div className="score">{comment.votes}</div>
						<div className="arrow down" role="button"><i onClick={voteArticle.bind(null, 'down')} className="arrow fa fa-arrow-circle-down block" /></div>
					</div>

						<div className="comment-box">
							<p className="comment-body">{comment.body}</p>
							<p className="comment-tagline">submitted 2 hours ago by {comment.created_by}</p>
						</div>

					<div className="child"></div>
					<div className="clearleft"></div>
				</div>
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

Article.propTypes = {
	voteArticle: React.PropTypes.func.isRequired,
	comments: React.PropTypes.array.isRequired
};

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