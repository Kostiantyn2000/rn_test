import * as constants from '../actions/constants/constants';

const INITIAL_STATE = {
  news: [],
  term: '',
  clicked: true,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.COLLECTION_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case constants.NEWS_SEARCH_TERM: {
      return {
        ...state,
        term: action.payload,
      };
    }
    case constants.NEWS_SEARCH_CLICKED:
      return {
        ...state,
        clicked: action.payload,
      };
    case constants.NEWS_FETCHED:
      return {...state, news: action.payload};
    case constants.NEWS_FAILED:
      return {...state, error: action.payload.error};
    default:
      return state;
  }
};
