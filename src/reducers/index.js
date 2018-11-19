import {GET_NEW_QUOTE} from '../actions';

const rootReducer = (state = [], action) => {
    switch(action.type) {
      case GET_NEW_QUOTE:
        return action.payload
      default:
        return state
    }
};

export default rootReducer;