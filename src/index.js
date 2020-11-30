import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import  Header  from './components/Header';
import Footer from './components/Footer';

export default class App extends Component {
  render(){
    return (
      <>
        <Header />
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native
            <Image source={{url: require('./images/logo-feirinha.svg')}} />
          </Text>
        </View>
        <Footer />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
