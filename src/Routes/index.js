import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Started from '../pages/Started';
import Home from '../pages/Home';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            alignSelf: 'center',
          },
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Started"
          component={Started}
        />
        <Stack.Screen
          options={{ title: 'Repositórios' }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
