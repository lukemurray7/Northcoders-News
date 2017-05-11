import React from 'react';


const Comments = function (props) {
    const canDelete = props.createdBy === 'northcoder' ? <i onClick={props.deleteComment.bind(null, props.id)} className="fa fa-trash-o fa-2x block" aria-hidden="true"></i> : '';
    return (
        <div className='thing comment-overall link'>
            <p className="parent"></p>
            <div className="midcol">
                <div className="arrow comment" role="button"><i onClick={props.voteComment.bind(null, props.id, 'up')} className="arrow fa fa-arrow-circle-up block" /></div>
                <div className="score">{props.votes}</div>
                <div className="arrow comment" role="button"><i onClick={props.voteComment.bind(null, props.id, 'down')} className="arrow fa fa-arrow-circle-down block" /></div>
            </div>

            <div className="comment-box">
                <p className="comment-body">{props.body}</p>
                <p className="comment-tagline">submitted 2 hours ago by {props.createdBy}</p>
            </div>

            <div className="child"></div>
            <div className="clearleft"></div>
            <div className="arrow delete-button" role="button"><i onClick={props.deleteComment.bind(null, props.id)} className="fa fa-trash-o fa-lg block" aria-hidden="true"></i></div>
        </div>

    );
};


export default Comments;