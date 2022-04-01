import {combineReducers} from 'redux';
import newsTabReducer from './newsTabReducer';
import newSubscribersReducer from './newSubscribersReducer';
import subscriptionTabReducer from './subscriptionTabReducer';

export default combineReducers({
  userReducer: newSubscribersReducer,
  usersReducer: subscriptionTabReducer,
  newsReducer: newsTabReducer,
});
