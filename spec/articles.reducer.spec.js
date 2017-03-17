import {expect} from 'chai';
import reducer from '../src/reducer/articles.reducer';
import {voteArticle, voteArticleError, voteArticleRequest, voteArticleSuccess} from '../src/actions/actions';

describe('articles reducer', () => {
    it('exists', () => {
        expect(reducer).to.be.a('function');
    });
    describe('handles VOTE_ARTICLES actions', () => {
        it('handles action VOTE_ARTICLES_REQUESET correctly', () => {
            const initialState = {
                loading: false,
                error: 'whatever'
            };
            const action = voteArticleRequest();
            const expectedState = {
                loading: true,
                error: null
            };
            expect(reducer(initialState, action)).to.eql(expectedState);

        });
        it('handles action VOTE_ARTICLES_SUCCESS correctly', () => {
            const initialState = {
                byId: {
                    1 : {
                        votes: 2
                    }
                },
                loading: true,
                error: null
            };
            const action = voteArticleSuccess({
                _id: 1,
                votes: 3
            });
            const expectedState = {
                byId: {
                    1 : {
                        votes: 3
                    }
                },
                loading: false,
                error: null
            };
            expect(reducer(initialState, action)).to.eql(expectedState);
            expect(initialState).to.not.be.equal(expectedState);
        });
        
    });
});