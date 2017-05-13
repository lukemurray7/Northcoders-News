import React from 'react';


const EachArticle = function (props) {
  return (

    <div className='thing article-overall link'>
      <p className="parent"></p>
      <span className="rank">{props.num}</span>
      <div className="midcol">
        <div className="arrow up" role="button"><i onClick={props.voteArticle.bind(null, props.article_id ,'up')} className="arrow fa fa-arrow-circle-up block" /></div>
        <div className="score">{props.votes}</div>
        <div className="arrow down" role="button"><i onClick={props.voteArticle.bind(null, props.article_id, 'down')} className="arrow fa fa-arrow-circle-down block" /></div>
      </div>
        <div className="entry">
          <p className="title">{props.title}</p>
          <p className="article-body">{props.body}</p>
          <p className="tagline">submitted by {props.createdBy}</p>
        </div>
      <div className="child"></div>
      <div className="clearleft"></div>
    </div>


  );
};

EachArticle.propTypes = {
  votes: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  comments: React.PropTypes.number,
  body: React.PropTypes.string,
  voteArticle: React.PropTypes.func.isRequired,
  article_id: React.PropTypes.string.isRequired
};

export default EachArticle;
