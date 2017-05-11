import { expect } from 'chai';
import reducer from '../src/reducer/comments.reducer';
import { voteCommentError, voteCommentRequest, voteCommentSuccess } from '../src/actions/vote_comment';
import { fetchCommentsError, fetchCommentsRequest, fetchCommentsSuccess } from '../src/actions/fetch_comments';

describe('comments reducer', () => {
    it('exists', () => {
        expect(reducer).to.be.a('function');
    });
    describe('handles fetch_comments actions', () => {
        it('handles action FETCH_COMMENTS_REQUEST correctly', () => {
            const initialState = {
                byId: {},
                loading: false,
                error: null,
                textInput: ''
            };
            const action = fetchCommentsRequest();
            const expectedState = {
                byId: {},
                textInput: '',
                loading: true,
                error: null
            };
            expect(reducer(initialState, action)).to.eql(expectedState);

        });
        it('handles action FETCH_comments_SUCCESS correctly', () => {
            const initialState = {
                byId: {},
                loading: false,
                error: null,
                textInput: ''
            };

            const comment1 = {
                belongs_to: "58e9fe0ddc4b72723f545a3f",
                body: "Van lejpamib guot ehepu me iwi elze didsizcec zij ul hapif lajrib gizomca mepoim seti lufatmoh. Lul feunu        deje houpi tiofoim opbelriw bufwag felrer ecburav am rub duakium atebi beletnu fen.",
                created_at: 6765000,
                created_by: "amy2016",
                votes: 6,
                __v: 0,
                _id: "58e9fe19dc4b72723f545ab5"
            };
            const comment2 = {
                belongs_to: "58e9fe0ddc4b72723f545a3f",
                body: "Van lejpamib guot ehepu me iwi elze didsizcec zij ul hapif lajrib gizomca mepoim seti lufatmoh. Lul feunu        deje houpi tiofoim opbelriw bufwag felrer ecburav am rub duakium atebi beletnu fen.",
                created_at: 6765000,
                created_by: "amy2016",
                votes: 6,
                __v: 0,
                _id: "58e9fe19dc4b72723f545ab6"
            };


            const action = fetchCommentsSuccess([comment1, comment2]);
            const expectedState = {
                byId: {
                    '58e9fe19dc4b72723f545ab5': comment1,
                    '58e9fe19dc4b72723f545ab6': comment2
                },
                loading: false,
                error: null,
                textInput: ''
            };
            expect(reducer(initialState, action)).to.eql(expectedState);
            expect(initialState).to.not.eql(expectedState);
        });
        it('handles action FETCH_comments_ERROR correctly', () => {
            const initialState = {
                byId: {},
                loading: false,
                error: null,
                textInput: ''
            };
            const action = fetchCommentsError('something went wrong');
            const expectedState = {
                byId: {},
                loading: false,
                error: 'something went wrong',
                textInput: ''
            };
            expect(reducer(initialState, action)).to.eql(expectedState);
        });
    });
    describe('handles VOTE_COMMENT actions', () => {
        it('handles action VOTE_COMMENT_REQUEST correctly', () => {
            const initialState = {
                byId: {},
                loading: false,
                error: null,
                textInput: ''
            };
            const action = voteCommentRequest();
            const expectedState = {
                byId: {},
                loading: true,
                error: null,
                textInput: ''
            };
            expect(reducer(initialState, action)).to.eql(expectedState);

        });
        it('handles action VOTE_COMMENT_SUCCESS correctly', () => {
            const initialState = {
                byId: {
                    1: {
                        body: 'hello',
                        votes: 2}
                },
                loading: true,
                error: null
            };

            const action = voteCommentSuccess(1, 'up');
            const expectedState = {
                byId: {
                    1: {
                        body: 'hello',
                        votes: 3
                    }
                },
                loading: false,
                error: null
            };
            expect(reducer(initialState, action)).to.eql(expectedState);
            expect(initialState).to.not.be.equal(expectedState);
        });
        it('handles action VOTE_COMMENT_ERROR correctly', () => {
            const initialState = {
                byId: {},
                loading: true,
                error: null
            };
            const expectedState = {
                byId: {},
                loading: false,
                error: 'something went wrong',
            };
            const action = voteCommentError('something went wrong');
            expect(reducer(initialState, action)).to.eql(expectedState);
        });

    });
});