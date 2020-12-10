import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

import Slideshow from '../../components/Slideshow';
import Categories from '../../components/Category';
import Products from '../../components/SlideProducts';
import Footer from '../../components/Footer';

const Home = ({navigation}) => {
  return (
    <>
      <ScrollView>
        <Slideshow />
        <Categories main={true} />
        <Products title="Ofertas" category="0" />
        <Products title="Frutas" category="51814491" />
        <Products title="Legumes" category="51824438" />
        <Products title="Verduras" category="51827393" />
        <Products title="Diversos" category="51814492" />
        <Footer />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
