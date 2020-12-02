import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  MainStackNavigator,
  ProductsStackNavigator,
  ManifestStackNavigator,
  SubscriptionsStackNavigator,
} from './StackNavigator';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#B0C861',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        labelStyle: {
          color: '#000',
          textAlign: 'center',
          fontSize: 17,
        },
      }}
      drawerContent={({items, ...props}) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="Produtos" component={ProductsStackNavigator} />
      <Drawer.Screen name="Manifesto" component={ManifestStackNavigator} />
      <Drawer.Screen
        name="Assinaturas"
        component={SubscriptionsStackNavigator}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
