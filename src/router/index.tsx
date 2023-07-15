import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserDetail, UserList } from '../pages';
import { createStackNavigator } from '@react-navigation/stack';
import { Pages } from 'interfaces/pages.interface';

const Stack = createStackNavigator<Pages>();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={{
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
        }}>
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
