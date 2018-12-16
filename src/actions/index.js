import * as axios from "axios";

export const GET_NEW_QUOTE = 'GET_NEW_QUOTE';

export const getNewQuote = () => async dispatch => {
  const res = await axios.get('https://talaikis.com/api/quotes/random/');
  dispatch({ type: GET_NEW_QUOTE, payload: res.data });
};