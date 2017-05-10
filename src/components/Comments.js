import React from 'react';
// import NavLink from './NavLink';


const Comments = function (props) {
    return (
        <div className='thing link'>
            <p className="parent"></p>
            <div className="midcol">
                <div className="arrow up" role="button"><i onClick={props.voteComment.bind(null, props.id, 'up')} className="arrow fa fa-arrow-circle-up block" /></div>
                <div className="score">{props.votes}</div>
                <div className="arrow down" role="button"><i onClick={props.voteComment.bind(null, props.id, 'down')} className="arrow fa fa-arrow-circle-down block" /></div>
            </div>

            <div className="comment-box">
                <p className="comment-body">{props.body}</p>
                <p className="comment-tagline">submitted 2 hours ago by {props.created_by}</p>
            </div>

            <div className="child"></div>
            <div className="clearleft"></div>
        </div>

    );
};


export default Comments;