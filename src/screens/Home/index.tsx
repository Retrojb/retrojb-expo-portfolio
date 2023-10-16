import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, RefreshControl } from "react-native";
import { Box, Text, styled, Heading, Image, VStack, HStack } from "@gluestack-ui/themed";
import { useImages } from "@hooks/useImages";
import { FlashList } from "@shopify/flash-list";

type ScreenProps = {
  path: string
}

const TitleContainer = styled(
  View,
  {
    p: '$2',
    flexDirection: 'column',
    justifyContent: 'center',
    bg: '$purple50'
  }
);

export const HomeScreen = ({path}: ScreenProps) => {

  const { data, isLoading, isError} = useImages();
  console.log(data)

  return (
  <SafeAreaView style={styles.container}>
    <View>

  </View>
    <FlashList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            tintColor={'$purple500'}
            onRefresh={() => data}
          />
        }
				data={data}
        estimatedItemSize={120}
        estimatedListSize={{ height: 160, width: 160 }}
				renderItem={({ item }) => (
              <VStack space='sm' reversed>
                <View style={styles.photoMainGrid}>
                  <View style={styles.photoGridItem}>
                    <Image
                      source={{ uri: item.stockPhotos }}
                      size={'lg'}
                      alt={'image'}
                    />
                    <Text
                      color='$primary500'
                      isTruncated
                    >
                      {item.userName}
                    </Text>
                  </View>
                </View>
              </VStack>
				)}
			/>
  </SafeAreaView>

	);
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 8
  },
  photoMainGrid: {
    flex: 0,
    borderWidth: 2,
    padding: 20,
  },
  photoGridItem: {
    padding: 10,
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: 'blue',
    justifyContent: 'center'
  }
})
