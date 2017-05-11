import React from 'react';
import { connect } from 'react-redux';
import {updateTextInput} from '../actions/post_comment';
import {postComment} from '../actions/post_comment';

function CommentBox (props) {
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <textarea
                    id='text-box'
                    type='text'
                    placeholder='Add your comment here...'
                    onChange={handleChange}
                    value={props.textInput}
                />
                <input id='button' className="button" type='submit' value='Post' />
            </form>
        </div>
    );

    function handleChange (e) {
        props.updateTextInput(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        if (props.textInput) props.postComment(props.articleId, props.textInput);

    }
}

function mapStateToProps (state) {
    return {
        loading: state.comments.loading,
        textInput: state.comments.textInput,
        byID: state.comments.byId
    };
}

function mapDispatchToProps (dispatch) {
  return {
    updateTextInput: function (e) {
        dispatch(updateTextInput(e));
    },
    postComment: function (articleId,comment) {
        dispatch(postComment(articleId, comment));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
