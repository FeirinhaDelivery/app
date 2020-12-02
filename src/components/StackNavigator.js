import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Images from '../images';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../pages/Home';
import Products from '../pages/Products';

const Stack = createStackNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#B0C861'} />
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => (
            <Image style={styles.tinyLogo} source={Images.profile.logo} />
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#B0C861',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name="bars" style={styles.menu} size={30} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={styles.direc}>
              <TouchableOpacity>
                <Icon name="user" style={styles.icon} size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="shopping-bag"
                  style={styles.icon}
                  size={30}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          ),
        }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </>
  );
};

const ProductsStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => (
          <Image style={styles.tinyLogo} source={Images.profile.logo} />
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#B0C861',
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="bars" style={styles.menu} size={30} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={styles.direc}>
            <TouchableOpacity>
              <Icon name="user" style={styles.icon} size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="shopping-bag"
                style={styles.icon}
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View>
        ),
      }}>
      <Stack.Screen name="Produtos" component={Products} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  direc: {
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 130,
    height: 40,
    resizeMode: 'stretch',
    paddingTop: 2,
    marginTop: 2,
  },
  icon: {
    fontSize: 25,
    marginTop: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  menu: {
    fontSize: 25,
    marginTop: 8,
    marginLeft: 20,
    color: '#000',
  },
});

export {MainStackNavigator, ProductsStackNavigator};
