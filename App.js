import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import MyTabs from './src/navigation/Tabs';
import { Provider } from 'react-redux';
import store from './src/redux/store';


export default function App() {

  return (

    <NavigationContainer>
      <Provider store={store}>
      <MyTabs></MyTabs>
      </Provider>
    </NavigationContainer>
    
  );
}
