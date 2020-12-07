import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

import api from '../service/api';
import {useCategory} from '../context/Category';

export default function Category() {
  const [categories, setCategories] = useState([]);
  const {setCodCategory} = useCategory();

  useEffect(() => {
    api.get('categories').then((response) => {
      setCategories(response.data.items);
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        {categories.map((category) => (
          <TouchableOpacity
            onPress={() => setCodCategory(category.id)}
            key={category.id}>
            <View style={[styles.category, styles[category.name]]}>
              <Image style={[styles.image]} source={{uri: category.imageUrl}} />
              <Text style={styles.text}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 5,
  },
  category: {
    flex: 0,
    width: 170,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 10,
    borderRadius: 6,
  },
  image: {
    width: 35,
    height: 35,
    marginHorizontal: 7,
  },
  text: {
    fontSize: 16,
  },
  Ofertas: {
    borderStartColor: '#91d5e2',
    borderStartWidth: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#91d5e2',
  },
  Combos: {
    borderStartColor: '#db7d8f',
    borderStartWidth: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#db7d8f',
  },
  Frutas: {
    borderStartColor: '#e5e15a',
    borderStartWidth: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e5e15a',
  },
  Legumes: {
    borderStartColor: '#e5b045',
    borderStartWidth: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e5b045',
  },
  Verduras: {
    borderStartColor: '#b0c862',
    borderStartWidth: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#b0c862',
  },
  Diversos: {
    borderStartColor: '#d8bb8d',
    borderStartWidth: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#d8bb8d',
  },
});
