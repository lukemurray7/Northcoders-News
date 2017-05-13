import { expect } from 'chai';
import reducer from '../src/reducer/articles.reducer';
import { voteArticleError, voteArticleRequest, voteArticleSuccess } from '../src/actions/vote_article';
import { fetchArticlesError, fetchArticlesRequest, fetchArticlesSuccess } from '../src/actions/fetch_articles';


describe('articles reducer', () => {
    it('exists', () => {
        expect(reducer).to.be.a('function');
    });
    describe('handles fetch_Articles actions', () => {
        it('handles action FETCH_ARTICLES_REQUEST correctly', () => {
            const initialState = {
                loading: false,
                error: null
            };
            const action = fetchArticlesRequest();
            const expectedState = {
                loading: true,
                error: null
            };
            expect(reducer(initialState, action)).to.eql(expectedState);

        });
        it('handles action FETCH_ARTICLES_SUCCESS correctly', () => {
            const initialState = {
                byId: {},
                loading: true,
                error: null
            };
            const obj1 = {
                belongs_to : 'football',
                body: 'Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United\'s manager was clearly impressed with the Austrian\'s performance.',
                comments: 6,
                created_by: 'tickle122',
                title: 'What does Jose Mourinho\'s handwriting say about his personality?',
                votes: 8,
                __v: 0,
                _id: '58e9fe0cdc4b72723f545a32'
            };
            const obj2 = {
                belongs_to : 'cooking',
                body: 'Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United\'s manager was clearly impressed with the Austrian\'s performance.',
                comments: 6,
                created_by: 'tickle122',
                title: 'What does Jose Mourinho\'s handwriting say about his personality?',
                votes: 8,
                __v: 0,
                _id: '58e9fe0cdc4b72723f545a33'
            };

            const action = fetchArticlesSuccess([obj1, obj2]);
            const expectedState = {
                byId: {
                    '58e9fe0cdc4b72723f545a32': obj1,
                    '58e9fe0cdc4b72723f545a33': obj2
                },
                loading: false,
                error: null
            };
            expect(reducer(initialState, action)).to.eql(expectedState);
            expect(initialState).to.not.eql(expectedState);
        });
        it('handles action FETCH_ARTICLES_ERROR correctly', () => {
            const initialState = {
                byId: {},
                loading: true,
                error: null
            };
            const expectedState = {
                byId: {},
                loading: false,
                error: 'something went wrong'
            };
            const action = fetchArticlesError('something went wrong');
            expect(reducer(initialState, action)).to.eql(expectedState);
        });
    });
    describe('handles VOTE_ARTICLE actions', () => {
        it('handles action VOTE_ARTICLE_REQUESET correctly', () => {
            const initialState = {
                loading: false,
                error: null
            };
            const action = voteArticleRequest();
            const expectedState = {
                loading: false,
                error: null
            };
            expect(reducer(initialState, action)).to.eql(expectedState);

        });
        it('handles action VOTE_ARTICLES_SUCCESS correctly', () => {
            const initialState = {
                byId: {
                    1: {
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
                    1: {
                        votes: 3
                    }
                },
                loading: false,
                error: null
            };
            expect(reducer(initialState, action)).to.eql(expectedState);
            expect(initialState).to.not.be.equal(expectedState);
        });
         it('handles action VOTE_ARTICLE_ERROR correctly', () => {
            const initialState = {
                byId: {},
                loading: true,
                error: null
            };
            const expectedState = {
                byId: {},
                loading: false,
                error: 'something went wrong'
            };
            const action = voteArticleError('something went wrong');
            expect(reducer(initialState, action)).to.eql(expectedState);
        });

    });
});