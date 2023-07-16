import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import { UserDetail, UserList } from 'pages';
import { Pages } from 'interfaces/pages.interface';

const Stack = createStackNavigator<Pages>();

export const Router = () => {
  const configNoTitle = {
    title: '',
  };

  const screenOptions: StackNavigationOptions = {
    cardStyle: {
      backgroundColor: '#fbfbfb',
    },
    headerStyle: {
      backgroundColor: '#ffb81d',
    },
    headerTitleStyle: {
      fontSize: 17,
    },
    headerShadowVisible: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="UserList"
          options={configNoTitle}
          component={UserList}
        />
        <Stack.Screen
          name="UserDetail"
          options={configNoTitle}
          component={UserDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
