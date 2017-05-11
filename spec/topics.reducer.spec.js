import { expect } from 'chai';
import reducer from '../src/reducer/topics.reducer';
import { fetchTopicsRequest, fetchTopicsSuccess, fetchTopicsError } from '../src/actions/fetch_topics';


describe('topics reducer', () => {
    it('exists', () => {
        expect(reducer).to.be.a('function');
    });
    describe('handles fetch_topics actions', () => {
        it('handles action FETCH_TOPICS_REQUEST correctly', () => {
            const initialState = {
                loading: false,
                error: null
            };
            const action = fetchTopicsRequest();
            const expectedState = {
                loading: true,
                error: null
            };
            expect(reducer(initialState, action)).to.eql(expectedState);

        });
        it('handles action FETCH_TOPICS_SUCCESS correctly', () => {
            const initialState = {
                data: [],
                loading: true,
                error: null
            };
            const expectedState = {
                data: ['football', 'cooking', 'coding'],
                loading: false,
                error: null
            };
            const action = fetchTopicsSuccess(['football', 'cooking', 'coding']);
            expect(reducer(initialState, action)).to.eql(expectedState);
            expect(initialState).to.not.eql(expectedState);
        });
        it('handles action FETCH_TOPICS_ERROR correctly', () =>  {
            const initialState = {
                data: [],
                loading: true,
                error: null
            };
            const expectedState = {
                data: [],
                loading: false,
                error: 'something went wrong'
            };
            const action = fetchTopicsError('something went wrong');
            expect(reducer(initialState, action)).to.eql(expectedState);
        });
    });
});
