import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { Image, View, Text } from "@gluestack-ui/themed";
import  Carousel, { Pagination } from "react-native-snap-carousel";

const SPACING = 10;
const THUMB_SIZE = 80;
const viewport = {
  width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
const IMAGES = {
  image1: require('../../assets/images/John.jpeg'),
  image2: require('../../assets/images/John.jpeg')
};

const ImageCarousel = () => {
  const [ images, setImages ] = useState([{ id: 1, image: IMAGES.image1}, { id: 2, image: IMAGES.image2 }]);
  const [ indexSelected, setIndexSelected ] = useState(0);
  
  const onSelect = (indexSelected: React.SetStateAction<number>) =>
		setIndexSelected(indexSelected);
  return (

      <View style={styles.container}>
        <Carousel
          layout='stack'
          data={images}
          windowSize={21}
          sliderWidth={viewport.width}
          itemWidth={viewport.width}
          onSnapToItem={index => onSelect(index)}
          renderItem={({ item, index }) => (
            <Image
              key={index}
              source={item.image}
              size='full'
              resizeMode='contain'
              alt={'image'}
            />
          )}
        />
        <View style={styles.paginationContainer}>
          <View style={styles.paginationItem}>
            <Pagination
              dotsLength={images.length}
              activeDotIndex={indexSelected}
              dotColor='orange'
              inactiveDotColor='grey'
              containerStyle={{ height: 20, width: 50,  margin: -15}}
              dotStyle={{ width: 10, height: 10, borderRadius: 2}}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
            <Text style={styles.paginationText}>
              {indexSelected + 1}/{images.length}
            </Text>
          </View>
        </View>
      </View>
  )
};

export default ImageCarousel

const styles = StyleSheet.create({
  container: {
    height: 600,
    paddingTop: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  paginationContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  paginationItem: {
    alignItems: 'center'
  },
  paginationText: {
    color: 'black',
    fontSize: 16,
    fontWeight: "400"
  }
})
