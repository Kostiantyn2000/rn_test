import * as constants from '../actions/constants/constants';

const INITIAL_STATE = {
  news: [],
  term: '',
  clicked: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.COLLECTION_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case constants.NEWS_SEARCH_TERM: {
      const {term} = action.payload;
      return {...state, term};
    }
    case constants.NEWS_SEARCH_CLICKED:
      return {
        ...state,
        clicked: action.payload,
      };
    default:
      return state;
  }
};
