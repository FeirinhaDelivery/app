import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

import Slideshow from '../../components/Slideshow';
import Categories from '../../components/Category';
import Footer from '../../components/Footer';

const Home = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <Slideshow />
        <Categories main={true} />
        <Text style={styles.altura}> This is the home screen</Text>
        <Footer />
      </ScrollView>
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
