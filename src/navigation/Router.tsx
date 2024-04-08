import {AuthNavigator} from '@navigation/Auth';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

export function Router() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
