/* eslint-disable no-shadow */
import React, {useCallback, memo, useRef, useState} from 'react';
import {FlatList, View, Dimensions, StyleSheet, Image} from 'react-native';
import Images from '../images';

const {width: windowWidth} = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    height: 320,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {width: '96%', height: 300, borderRadius: 20},
  slideTitle: {fontSize: 24},
  slideSubtitle: {fontSize: 18},

  pagination: {
    position: 'absolute',
    top: 280,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {backgroundColor: '#B0C861'},
  paginationDotInactive: {backgroundColor: 'gray'},

  carousel: {flex: 1},
});

const slideList = Array.from({length: 1}).map((_, i) => {
  return {
    id: i,
    image: 'https://feirinha.delivery/static/media/banner-mobile.3fc6acc4.png',
    title: `This is the title ${i + 1}!`,
    subtitle: `This is the subtitle ${i + 1}!`,
  };
});

const Slide = memo(function Slide({data}) {
  return (
    <View style={styles.slide}>
      <Image source={{uri: data.image}} style={styles.slideImage} />
    </View>
  );
});

function Pagination({index}) {
  return (
    <View style={styles.pagination} pointerEvents="none">
      {slideList.map((_, i) => {
        return (
          <View
            key={i}
            style={[
              styles.paginationDot,
              index === i
                ? styles.paginationDotActive
                : styles.paginationDotInactive,
            ]}
          />
        );
      })}
    </View>
  );
}

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    const isNoMansLand = distance > 0.4;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 0,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 2,
    keyExtractor: useCallback((s) => String(s.id), []),
    getItemLayout: useCallback(
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      [],
    ),
  };

  const renderItem = useCallback(function renderItem({item}) {
    return <Slide data={item} />;
  }, []);

  return (
    <>
      <FlatList
        data={slideList}
        style={styles.carousel}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        {...flatListOptimizationProps}
      />
      <Pagination index={index} />
    </>
  );
}
