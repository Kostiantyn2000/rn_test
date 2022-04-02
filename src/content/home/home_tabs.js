import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SvgComponentNews} from '../../../assets/svg/news-svgrepo-com';
import {SvgComponentUsers} from '../../../assets/svg/users-svgrepo-com';
import * as React from 'react';
import NewsTab from './news_tab';
import SubscriptionTab from './subscriptions_tab';
import NewSubscriberTab from './new_subscribers_tab';

const Tab = createBottomTabNavigator();

export default class HomeTabs extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Subscribers"
          component={SubscriptionTab}
          options={{
            tabBarLabel: 'Subscribers',
            tabBarIcon: () => <SvgComponentUsers />,
          }}
        />
        <Tab.Screen
          name="New"
          component={NewsTab}
          options={{
            tabBarLabel: 'New',
            tabBarIcon: () => <SvgComponentNews />,
          }}
        />
        <Tab.Screen
          name="NewSubscribers"
          component={NewSubscriberTab}
          options={{
            tabBarLabel: 'NewSubscribers',
            tabBarIcon: () => <SvgComponentNews />,
          }}
        />
      </Tab.Navigator>
    );
  }
}
