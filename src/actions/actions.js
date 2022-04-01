import NewsRepository from '../repositories/news_repository';
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

export let getCollectionNews = () => dispatch => {
  function onSuccess(success) {
    dispatch({type: constants.NEWS_FETCHED, payload: success});
    return success;
  }
  try {
    const newsRepository = new NewsRepository();
    newsRepository.getWarNews().then(data => {
      console.log(data.articles);
      return onSuccess(data.articles);
    });
  } catch (error) {
    return console.log(error);
  }
};

export let searchChangedNews = term => {
  return {
    type: constants.NEWS_SEARCH_TERM,
    payload: term,
  };
};

export let isSearchBarClickedNews = bool => {
  return {
    type: constants.NEWS_SEARCH_TERM,
    payload: bool,
  };
};

export let getSpecifiedNews = text => async dispatch => {
  function onSuccess(success) {
    dispatch({type: constants.NEWS_FETCHED, payload: success});
    return success;
  }
  function onError(error) {
    dispatch({type: constants.NEWS_FAILED, error});
  }
  try {
    const newsRepository = new NewsRepository();
    newsRepository.getSpecifiedNews(text).then(data => {
      console.log(data.articles);
      return onSuccess(data.articles);
    });
  } catch (error) {
    return onError(error);
  }
};
