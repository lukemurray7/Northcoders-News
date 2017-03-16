import React from 'react';
import NavLink from './NavLink';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <p>Upvotes:</p>
          {props.votes}
        </div>
        <NavLink to={`/articles/${props.article_id}`}><div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'>{props.title}</h3>
          </div>
          <h4>Comments</h4>
          {props.comments}
        </div>
        </NavLink>
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  votes: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  comments: React.PropTypes.number.isRequired
};

export default ArticleCard;
