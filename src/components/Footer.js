import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Images from '../images';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {
  return (
    <>
      <View style={styles.footer}>
        <View style={styles.footerW}>
          <View style={styles.direc}>
            <Image style={styles.tinyLogo} source={Images.profile.logo} />
          </View>
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
          <Text style={styles.title}>Link Úteis</Text>
          <Text style={styles.text}>Quem Somos</Text>
          <Text style={styles.text}>Políticas de Pagamento</Text>
          <Text style={styles.text}>Políticas de Entrega</Text>
          <Text style={styles.text}>Termos de Uso e Privacidade</Text>
        </View>
        <Text style={styles.copy}>Feirinha © 2020</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#B0C861',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 10,
  },
  footerW: {
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 20,
  },
  direc: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 300,
    height: 100,
    resizeMode: 'stretch',
    paddingTop: 2,
    marginTop: 8,
    marginBottom: 40,
  },
  title: {
    marginLeft: 40,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginLeft: 40,
    fontSize: 18,
    fontWeight: '100',
  },
  icon: {
    fontSize: 35,
    marginTop: 5,
    marginRight: 20,
    alignItems: 'center',
  },
  copy: {
    textAlign: 'center',
    marginTop: 10,
  },
  icones: {
    marginLeft: 40,
    marginBottom: 20,
    flexDirection: 'row',
  },
});
