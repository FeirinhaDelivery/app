import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import Footer from '../../components/Footer';

const Sobre = ({navigation}) => {
  return (
    <>
      <View style={styles.center}>
        <Text>Página Produtos</Text>
        <Button
          title="Go to About Screen"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go to About Screen"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Sobre;
