import {screenOptions} from '@navigation/options';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '@screens/AuthFlow/SignIn';
import React from 'react';

export type AuthStackParamList = {
  SignIn: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
}
