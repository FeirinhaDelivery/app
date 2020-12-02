import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {MainStackNavigator, ProductsStackNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="Produtos" component={ProductsStackNavigator} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
