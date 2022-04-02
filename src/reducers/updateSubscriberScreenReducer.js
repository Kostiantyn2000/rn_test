import * as constants from '../actions/constants/constants';

const INITIAL_STATE = {
  name: '',
  age: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.UPDATE_SUBSCRIBERS_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case constants.UPDATE_SUBSCRIBERS_AGE:
      return {
        ...state,
        age: action.payload,
      };
    default:
      return state;
  }
};
