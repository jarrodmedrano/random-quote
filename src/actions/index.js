import * as axios from "axios";

export const GET_NEW_QUOTE = 'GET_NEW_QUOTE';

export const getNewQuote = () => async dispatch => {
  const res = await axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1');
  dispatch({ type: GET_NEW_QUOTE, payload: res.data[0] });
};