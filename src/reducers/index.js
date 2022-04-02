import {combineReducers} from 'redux';
import newsTabReducer from './newsTabReducer';
import newSubscribersReducer from './newSubscribersReducer';
import subscriptionTabReducer from './subscriptionTabReducer';
import updateSubscribersScreen from './updateSubscriberScreenReducer';

export default combineReducers({
  userReducer: newSubscribersReducer,
  usersReducer: subscriptionTabReducer,
  newsReducer: newsTabReducer,
  updateReducer: updateSubscribersScreen,
});
