import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import Footer from '../../components/Footer';

const Manifest = ({navigation}) => {
  return (
    <>
      <View style={styles.center}>
        <Text>Página de Manifestos</Text>
        <Button
          title="Voltar para home"
          onPress={() => navigation.navigate('Home')}
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

export default Manifest;
