import { Text, View } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import React, { JSX } from "react";

interface TitleProps extends React.ComponentPropsWithoutRef<typeof View> {
  title: string
  children?: React.ReactNode
}

const TitleComponent = ({ title, children, ...props}: React.PropsWithChildren<TitleProps>): JSX.Element => {
	return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
};

export default TitleComponent;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700'
  }
})
