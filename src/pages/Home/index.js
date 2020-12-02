import React from 'react';
import {SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native';

import Slideshow from '../../components/Slideshow';
import Footer from '../../components/Footer';

const Home = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Slideshow />
          <Text style={styles.altura}> This is the home screen</Text>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  altura: {
    height: 400,
  },
});

export default Home;
