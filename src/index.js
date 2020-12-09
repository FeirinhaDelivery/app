import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './components/DrawerNavigator';
import CategoryProvider from './context/Category';
import OffsetProvider from './context/Offset';

export default class App extends Component {
  render() {
    return (
      <>
        <OffsetProvider>
          <CategoryProvider>
            <NavigationContainer>
              <DrawerNavigator />
            </NavigationContainer>
          </CategoryProvider>
        </OffsetProvider>
      </>
    );
  }
}
