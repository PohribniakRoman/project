import {Router} from '@navigation/Router';
import {configuredStore} from '@store/configureStore';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableFreeze} from 'react-native-screens';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

enableFreeze();

export function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={configuredStore.store}>
        <PersistGate persistor={configuredStore.persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
