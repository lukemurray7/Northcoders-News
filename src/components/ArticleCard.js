import React from 'react';
import NavLink from './NavLink';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <i className="fa fa-arrow-circle-up block"/>
          <span>{props.votes}</span>
          <i className="fa fa-arrow-circle-down block"/>
        </div>
        <NavLink to={`/articles/${props.article_id}`}>
          <div className='media-content'>
            <div className='content'>
              <div>{props.body}</div>
              <h3 className='title is-3'>{props.title}</h3>
            </div>
            {props.comments ? <h4>Comments: {props.comments}</h4> : null}
          </div>
        </NavLink>
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  votes: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  comments: React.PropTypes.number,
  body: React.PropTypes.string
};

export default ArticleCard;
