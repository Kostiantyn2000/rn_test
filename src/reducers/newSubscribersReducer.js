import * as constants from '../actions/constants/constants';

const INITIAL_STATE = {
  userName: '',
  age: 0,
  maritalStatus: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.CREATING_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case constants.CREATING_USER_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case constants.CREATING_USER_MARITAL_STATUS:
      return {
        ...state,
        maritalStatus: action.payload,
      };
    default:
      return state;
  }
};
