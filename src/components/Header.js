import React from 'react';
import {StyleSheet, View, StatusBar, Image} from 'react-native';

import Images from '../images';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header({navigation}) {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#B0C861'} />
      <View style={styles.header}>
        <Icon
          name="bars"
          style={styles.menu}
          size={30}
          color="#fff"
          onPress={() => navigation.openDrawer()}
        />
        <Image style={styles.tinyLogo} source={Images.profile.logo} />
        <View style={styles.direc}>
          <Icon name="user" style={styles.icon} size={30} color="black" />
          <Icon
            name="shopping-bag"
            style={styles.icon}
            size={30}
            color="black"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  direc: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#B0C861',
    justifyContent: 'space-between',
  },
  tinyLogo: {
    width: 130,
    height: 40,
    resizeMode: 'stretch',
    paddingTop: 2,
    marginTop: 8,
  },
  icon: {
    fontSize: 25,
    marginTop: 20,
    marginRight: 10,
    alignItems: 'center',
  },
  menu: {
    fontSize: 25,
    marginTop: 20,
    marginLeft: 20,
    color: '#000',
  },
});
