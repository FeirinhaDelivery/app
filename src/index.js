import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './components/DrawerNavigator';

export default class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </>
    );
  }
}
