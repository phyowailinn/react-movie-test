import axios from 'axios';
const queryString = require('query-string');
import config from '../../config';
/* constants action type */
export const FETCH_MOVIES = 'fetch_movies';
export const FETCH_DETAIL = 'fetch_detail';

export const fetchMovies = query => async dispatch => {
  let url;
  const params = queryString.parse(query);
  const page = params.page ? params.page : 1;
  if (params.keyword) {
    url = `${config.baseUrl}/3/search/movie?api_key=${config.apikey}&page=${page}&query=${params.keyword}`;
  }else{    
    url = `${config.baseUrl}/3/discover/movie?api_key=${config.apikey}&page=${page}`;
  }

  const res = await axios.get(url);

  dispatch({
    type: FETCH_MOVIES,
    payload: res.data
  });
};

export const fetchDetail = Id => async dispatch => {
	let url;
	url = `${config.baseUrl}/3/movie/${Id}?api_key=${config.apikey}`;

	const res = await axios.get(url);
	
	dispatch({
		type: FETCH_DETAIL,
		payload: res.data
	});
};