import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './components/DrawerNavigator';
import CategoryProvider from './context/Category';

export default class App extends Component {
  render() {
    return (
      <>
        <CategoryProvider>
          <NavigationContainer>
            <DrawerNavigator />
          </NavigationContainer>
        </CategoryProvider>
      </>
    );
  }
}
