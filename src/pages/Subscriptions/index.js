import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import Footer from '../../components/Footer';
import Images from '../../images';

const Subscriptions = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Image
              style={styles.image}
              source={Images.subscriptions.subscriptions}
            />
            <Text style={styles.text}>
              Frete grátis com valor a partir de R$ 25,00 em compra mínima.
            </Text>
            <Text style={styles.textDisponivel}>
              Disponível em Foz do Iguaçu
            </Text>
            <View style={styles.viewButton}>
              <Button
                title="Assine Agora!"
                color="#25D366"
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View>
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
  textDisponivel: {
    marginBottom: 7,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 17,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    maxHeight: 350,
    marginTop: -20,
  },
});

export default Subscriptions;
