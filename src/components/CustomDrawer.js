import {DrawerItemList} from '@react-navigation/drawer';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

import Images from '../images';
import Icon from 'react-native-vector-icons/FontAwesome';

function CustomDrawerContent({...props}) {
  return (
    <View style={styles.center}>
      <View style={styles.superior}>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Icon name="times" style={styles.icon} color="#000" />
        </TouchableOpacity>
      </View>

      <View>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.itens}>
        <Image style={styles.tinyLogo} source={Images.profile.logo} />
        <Text style={styles.title}>Acompanhe de perto!</Text>
        <View style={styles.icones}>
          <Icon name="list" style={styles.icon} color="#000" />

          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.facebook.com')}>
            <Icon name="facebook-square" style={styles.icon} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.instagram.com')}>
            <Icon name="instagram" style={styles.icon} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://youtube.com')}>
            <Icon name="youtube" style={styles.icon} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  superior: {
    marginHorizontal: 20,
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tinyLogo: {
    width: 190,
    height: 58,
    resizeMode: 'stretch',
    marginBottom: 20,
    bottom: 0,
  },

  itens: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  icon: {
    fontSize: 25,
    marginTop: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  icones: {
    marginBottom: 20,
    flexDirection: 'row',
  },
});

export default CustomDrawerContent;
