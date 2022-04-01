import * as constants from '../actions/constants/constants';

const INITIAL_STATE = {
  users: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.COLLECTION_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
