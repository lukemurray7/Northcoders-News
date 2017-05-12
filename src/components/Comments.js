import React from 'react';


const Comments = function (props) {

    return (
        <div className='thing comment-overall link'>
            <p className="parent"></p>
            <div className="midcol">
                <div className="arrow comment" role="button"><i onClick={props.voteComment.bind(null, props.id, 'up')} className="arrow fa fa-arrow-circle-up block" /></div>
                <div className="score">{props.votes}</div>
                <div className="arrow comment" role="button"><i onClick={props.voteComment.bind(null, props.id, 'down')} className="arrow fa fa-arrow-circle-down block" /></div>
            </div>

            <div className="entry">
                <p className="comment-body">{props.body}</p>
                <p className="comment-tagline">submitted by {props.createdBy}</p>
            </div>

            <div className="child"></div>
            <div className="clearleft"></div>
            <div className="arrow delete-button" role="button"><i onClick={props.deleteComment.bind(null, props.id)} className="fa fa-trash-o fa-lg block" aria-hidden="true"></i></div>
        </div>

    );
};


export default Comments;