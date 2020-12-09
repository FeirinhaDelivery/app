/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ActivityIndicator,
  Image,
  Text,
  FlatList,
} from 'react-native';

import api from '../../service/api';

import {useOffset} from '../../context/Offset';
import {useCategory} from '../../context/Category';
import Categories from '../../components/Category';
import Footer from '../../components/Footer';

const Products = ({...props}) => {
  const {codCategory} = useCategory();
  const {offset, setOffset} = useOffset();
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [state, setState] = useState({
    data: [],
    offset: 0,
    limit: 0,
  });

  useEffect(() => {
    if (state.limit > offset || state.limit === 0) {
      setLoading(true);
      let url =
        codCategory > 0
          ? `products?category=${codCategory}&limit=8&offset=${offset}&enabled=true&sortBy=NAME_ASC`
          : 'products?limit=10&offset=0&enabled=true&sortBy=NAME_ASC';

      api.get(url).then((response) => {
        setState({limit: response.data.total});
        if (offset === 0) {
          setProducts(response.data.items);
        } else {
          setProducts([...products, ...response.data.items]);
        }
        setLoading(false);
      });
    }
  }, [codCategory, offset]);

  function loadRepositories() {
    setOffset(offset + 8);
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#B0C861" />
          </View>
        ) : (
          <FlatList
            data={products}
            keyExtractor={(product) => product.id.toString()}
            style={styles.scrollStyle}
            renderItem={({item: product}) => (
              <View style={styles.product}>
                <Image
                  style={[styles.image]}
                  source={{uri: product.hdThumbnailUrl}}
                />
                <View style={styles.productText}>
                  <Text style={styles.text}>{product.name}</Text>
                  <Text style={styles.price}>
                    {product.defaultDisplayedPriceFormatted}
                  </Text>
                </View>
                <View>
                  <Text style={styles.text}>opcoes</Text>
                </View>
              </View>
            )}
            ListFooterComponent={<Footer />}
            ListHeaderComponent={<Categories />}
            onEndReached={loadRepositories}
            onEndReachedThreshold={0.1}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollStyle: {
    marginTop: 20,
  },
  product: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  productText: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'left',
  },
  image: {
    width: 70,
    height: 70,
    marginHorizontal: 7,
    borderRadius: 5,
  },

  text: {
    fontSize: 14,
    textAlign: 'left',
  },
  price: {
    fontSize: 13,
    color: '#81BDC9',
    fontWeight: 'bold',
  },
  mb: {
    marginBottom: 20,
  },
});

export default Products;
