import { Image, View, ScrollView, Text, StyleSheet, SafeAreaView } from "react-native";
import  ImageCarousel from "@components/Carousel/";
import {  } from "@config/theme";
import React from "react";

type ScreenProps = {
  path: string
}

const image =  require('../../../assets/images/delete.gif')
const DeveloperScreen = ({path}: ScreenProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Developer</Text>
      </View>
        <View >
          <ImageCarousel />
        {/*<Image source={image} alt={'Abella'} />*/}
      </View>
    </ScrollView>
  )
}

export default DeveloperScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer:{
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  img: {
    width: '90%',
    height: '50%'
  },
  carouselContainer: {
    flex: 1,
    width: '80%',
    height: '100%',
    alignItems: 'center',
    borderWidth: 3
  }
})
