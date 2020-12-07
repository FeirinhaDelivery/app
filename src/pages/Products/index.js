import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
} from 'react-native';

import api from '../../service/api';

import {useCategory} from '../../context/Category';
import Categories from '../../components/Category';
import Footer from '../../components/Footer';

const Products = ({...props}) => {
  const {codCategory, setCodCategory} = useCategory();
  const [products, setProducts] = useState([]);
  let limit = 6;
  let offset = 0;

  useEffect(() => {
    let url =
      codCategory > 0
        ? `products?category=${codCategory}&limit=${limit}&offset=${offset}&enabled=true&sortBy=NAME_ASC`
        : `products?limit=10&offset=${offset}&enabled=true&sortBy=NAME_ASC`;

    api.get(url).then((response) => {
      setProducts(response.data.items);
    });
  }, [codCategory, limit, offset]);

  console.log(codCategory);

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.scrollStyle}>
            <Categories />
          </View>
          <View style={styles.mb}>
            {products.map((product) => (
              <View style={styles.product} key={product.id}>
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
            ))}
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
  scrollStyle: {
    marginVertical: 20,
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
