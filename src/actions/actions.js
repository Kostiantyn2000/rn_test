import * as constants from './constants/constants';

export let creatingUserName = text => {
  return {
    type: constants.CREATING_USER_NAME,
    payload: text,
  };
};

export let creatingUserAge = text => {
  return {
    type: constants.CREATING_USER_AGE,
    payload: parseInt(text, 10),
  };
};

export let creatingUserMaritalStatus = boolean => {
  return {
    type: constants.CREATING_USER_MARITAL_STATUS,
    payload: boolean,
  };
};

export let collectionUsers = users => {
  return {
    type: constants.COLLECTION_USERS,
    payload: users,
  };
};

export let collectionNews = news => {
  return {
    type: constants.COLLECTION_NEWS,
    payload: news,
  };
};

export let searchPanelNewsTerm = term => {
  console.log(term);
  return {
    type: constants.NEWS_SEARCH_TERM,
    payload: term,
  };
};

export let searchBarNewsClicked = clicked => {
  return {
    type: constants.NEWS_SEARCH_TERM,
    payload: clicked,
  };
};
