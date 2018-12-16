import {GET_NEW_QUOTE} from '../actions';

const initialState = {
  quote: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case GET_NEW_QUOTE:
        return Object.assign({}, state, {quote: action.payload});
      default:
        return state
    }
};

export default rootReducer;