import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import api from '../service/api';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image:
      'https://d2j6dbq0eux0bg.cloudfront.net/images/28820124/1515408266.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image:
      'https://d2j6dbq0eux0bg.cloudfront.net/images/28820124/1515408266.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:
      'https://d2j6dbq0eux0bg.cloudfront.net/images/28820124/1515408266.jpg',
  },
];

const Item = ({title, image, price, priceDiscount, priceCompare}) => (
  <View style={styles.item}>
    <Image style={[styles.image]} source={{uri: image}} />
    <Text style={styles.name}>{title}</Text>
    {priceDiscount ? (
      <>
        <Text style={styles.price}>{priceDiscount}</Text>
        <Text style={styles.priceOff}>{priceCompare}</Text>
      </>
    ) : (
      <Text style={styles.price}>{price}</Text>
    )}
  </View>
);

export default function SlideProducts({title, category}) {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const renderItem = ({item}) => (
    <Item
      title={item.name}
      image={item.hdThumbnailUrl}
      price={item.defaultDisplayedPriceFormatted}
      priceCompare={item.compareToPriceFormatted}
      priceDiscount={item.compareToPriceDiscountFormatted}
    />
  );

  useEffect(() => {
    setLoading(true);
    let url =
      category > 0
        ? `products?category=${category}&limit=6&offset=0&enabled=true&sortBy=NAME_ASC`
        : 'products?onsale=onsale&enabled=true&limit=6&sortBy=RELEVANCE';

    api.get(url).then((response) => {
      setProducts(response.data.items);
      setLoading(false);
    });
  }, [category]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.linha, styles[title]]} />
        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#B0C861" />
          </View>
        ) : (
          <FlatList
            data={products}
            horizontal={true}
            renderItem={renderItem}
            keyExtractor={(product) => product.id.toString()}
          />
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 10,
  },
  item: {
    width: 170,
    height: 250,
    marginVertical: 8,
    marginHorizontal: 13,
  },
  image: {
    width: 170,
    height: 150,
    borderRadius: 8,
  },
  name: {
    height: 50,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '100',
    marginLeft: 10,
  },
  price: {
    fontSize: 16,
    color: '#59a8b2',
    marginLeft: 15,
  },
  priceOff: {
    fontSize: 15,
    marginLeft: 15,
    textDecorationLine: 'line-through',
  },
  linha: {
    width: 85,
    height: 3,
    marginLeft: 9,
    borderRadius: 15,
  },
  Ofertas: {
    backgroundColor: '#91d5e2',
  },
  Combos: {
    backgroundColor: '#db7d8f',
  },
  Frutas: {
    backgroundColor: '#e5e15a',
  },
  Legumes: {
    backgroundColor: '#e5b045',
  },
  Verduras: {
    backgroundColor: '#b0c862',
  },
  Diversos: {
    backgroundColor: '#d8bb8d',
  },
});
