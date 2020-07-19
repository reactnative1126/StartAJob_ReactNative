import React, { Fragment } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import AppNavigation from './src/router'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

export default function App() {
  return (
    <Fragment>
      <StatusBar
        translucent={true}
        backgroundColor="blue"
        barStyle="light-content" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
