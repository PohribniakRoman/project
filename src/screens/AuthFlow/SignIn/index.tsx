import {isAppInitializedSelector} from '@store/modules/AppCommon/selectors';
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

export const SignIn = () => {
  const isAppInitialized = useSelector(isAppInitializedSelector);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Project</Text>
      <Text>{String(isAppInitialized)}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
