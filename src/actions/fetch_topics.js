import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';


export function fetchAllTopics () {
	// thunk action
	return function (dispatch) {
		dispatch(fetchTopicsRequest());
		
		axios
			.get(`${ROOT}/topics`)
			.then(res => {
				dispatch(fetchTopicsSuccess(res.data.topics));
			})
			.catch(err => {
				dispatch(fetchTopicsError(err)); 
			});
	};
}  

export function fetchTopicsRequest () {
	return {
		type: types.FETCH_TOPICS_REQUEST
	};
}
export function fetchTopicsSuccess (Topics) {
	return {
		type: types.FETCH_TOPICS_SUCCESS,
		data: Topics
	};
}
export function fetchTopicsError (err) {
	return {
		type: types.FETCH_TOPICS_ERROR,
		data: err
	};
}

