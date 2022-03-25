import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import NewsTab from './news_tab';
import SubscriptionTab from './subscriptions_tab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default class HomeTabs extends React.Component {
  render() {
    return (
      // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Subscribers" component={SubscriptionTab} />
        <Tab.Screen name="New" component={NewsTab} />
      </Tab.Navigator>
      // </NavigationContainer>
    );
  }
}
