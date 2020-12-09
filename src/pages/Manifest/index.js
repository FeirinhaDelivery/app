import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import WebView from 'react-native-webview';

import Images from '../../images';
import Footer from '../../components/Footer';

const Manifest = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <View>
            <Image
              style={[styles.imagemGeral, styles.imagemTopo]}
              source={Images.manifest.muitos}
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.titulo}>Uma nova forma de ver o mundo</Text>
            <Text style={styles.text}>
              Existimos para combater esse problema que a abundância traz: muito
              para poucos. Lutamos contra o desperdício de alimentos, a
              descentralização da cadeia de distribuição e a consciência da
              alimentação natural.
            </Text>
            <Text style={styles.text}>
              Fazemos parte da nova economia low touch, alinhada com estilo de
              vida do homem atual, com foco na comercialização de produtos
              naturais.
            </Text>
            <Text style={styles.text}>
              Mais do que a definição dos produtos que vamos comercializar,
              sabemos o que não vamos vender: alimentos industrializados e
              ultraprocessados.
            </Text>

            <Text style={[styles.text, styles.titleVideo]}>
              Assista o Manifesto da Feirinha e saiba mais!
            </Text>
            {/* <WebView
              ref={this.webViewRef}
              allowsFullscreenVideo
              useWebKit
              onLoad={this.webViewLoaded}
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              javaScriptEnabled
              scrollEnabled={true}
              source={{
                uri: 'https://www.youtube.com/watch?v=_9huMNXdh48',
              }}
              style={styles.youtubeVideo}
            /> */}
            <WebView
              allowsFullscreenVideo
              useWebKit
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              javaScriptEnabled
              scrollEnabled={false}
              source={{
                uri: 'https://www.youtube.com/watch?v=_9huMNXdh48',
              }}
              style={styles.youtubeVideo}
            />
          </View>

          <Image
            style={styles.imagemGeral}
            source={Images.manifest.assinaturas}
          />

          <ImageBackground
            source={require('../../images/bg-whatsapp-mobile.33d2976f.png')}
            style={[styles.image, styles.imagemGeral]}>
            <Text>faça parte da nossa comunidade no whatsapp</Text>
          </ImageBackground>
        </View>
        <Footer />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 21,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  text: {
    color: 'gray',
    marginHorizontal: 12,
    marginTop: 12,
  },
  imagemTopo: {
    marginTop: -15,
  },
  imagemGeral: {
    width: '100%',
    resizeMode: 'contain',
    maxHeight: 350,
  },
  titleVideo: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 20,
  },
  youtubeVideo: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#000',
  },
  whats: {},
  image: {
    height: 300,
    padding: 30,
  },
});

export default Manifest;
