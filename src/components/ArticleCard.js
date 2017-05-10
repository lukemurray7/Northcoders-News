import React from 'react';
import NavLink from './NavLink';
import VoteButtons from './VoteButtons';

const ArticleCard = function (props) {
  return (

    <div className='thing link'>
      <p className="parent"></p>
      <span className="rank">{props.num}</span>
      <div className="midcol">
        <div className="arrow up" role="button"><i onClick={props.voteArticle.bind(null, 'up')} className="arrow fa fa-arrow-circle-up block" /></div>
        <div className="score">{props.votes}</div>
        <div className="arrow down" role="button"><i onClick={props.voteArticle.bind(null, 'down')} className="arrow fa fa-arrow-circle-down block" /></div>
      </div>
      <div className="entry">
        <p className="title">{props.title}</p>
        <p className="tagline">tagline</p>
        <ul className="flat-list buttons">
          <li className="comments">Comments: {props.comments}</li>
          <li className="share">Share</li>
        </ul>
      </div>
      <div className="child"></div>
      <div className="clearleft"></div>
    </div>


  );
};

ArticleCard.propTypes = {
  votes: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  comments: React.PropTypes.number,
  body: React.PropTypes.string,
  voteArticle: React.PropTypes.func.isRequired,
  article_id: React.PropTypes.string.isRequired
};

export default ArticleCard;
{/*<article className='media'>
        <VoteButtons votes={props.votes}
          voteArticle={props.voteArticle.bind(null, props.article_id)}
        />
        <NavLink to={`/articles/${props.article_id}`}>
          <div className='media-content'>
            <div className='content'>
              <div>{props.body}</div>
              <h3 className='title is-3'>{props.title}</h3>
            </div>
            {props.comments ? <h4>Comments: {props.comments}</h4> : null}
          </div>
        </NavLink>
      </article>*/}