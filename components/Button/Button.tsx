import { Pressable, StyleSheet, Text, View } from "react-native";
import { MutableRefObject } from "react";
import { IButtonProps } from "./ButtonProps";
import create = StyleSheet.create;


export const Button = ({text, ariaLabel, ariaRole, ariaHint, isDisabled, isFocus, isPressed, onPress  }: IButtonProps, ref: any) => {

  return (
		<View>
			<Pressable
				disabled={isDisabled}
				ref={ref}
				accessibilityLabel={ariaLabel}
				accessibilityHint={ariaHint}
				focusable={isFocus}
				onPress={onPress}
			>
        <Text>{text}</Text>
			</Pressable>
		</View>
	);
};

export const styles = StyleSheet.create({
  pressableContianer: {
    display: "flex",
    backgroundColor: '#000000'
  },
  textStyle: {
    color: '#FFFFFF'
  },
});
