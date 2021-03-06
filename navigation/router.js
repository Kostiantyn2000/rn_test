import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabs from '../src/content/home/home_tabs';
import SignUp from '../src/content/auth/sign_up_view';
import SingIn from '../src/content/auth/sign_in_view';
import UpdateSubscribersScreen from '../src/content/update_subscribers_screen/update_subscribers_screen';
const Stack = createNativeStackNavigator();

export default class Router extends React.Component {
  render = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SignUp} />
        <Stack.Screen name="SingIn" component={SingIn} />
        <Stack.Screen name="HomeTab" component={HomeTabs} />
        <Stack.Screen
          name="UpdateSubscribers"
          component={UpdateSubscribersScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
