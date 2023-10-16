import React from "react";
import { styled, StyledProvider, Text, useTheme } from "@gluestack-ui/themed";
import { Pressable } from "react-native";
import { config } from "@config/gluestack-ui.config";
import { Octicons } from '@expo/vector-icons';

const StyledButton = styled(Pressable, {
  bg: "$primary600",
  px: "$6",
  py: "$4",
  _dark: {
    bg: "$info600",
  },
  _light: {
    bg: "$info800",
  },
})
export function ThemeSwitcher(currentTheme: string ): JSX.Element {
	const [currentColorMode, setCurrentColorMode] = React.useState("light");

	console.log(currentColorMode);
	// @ts-ignore
  return (
		<StyledProvider config={config} colorMode={currentColorMode}>
			<Pressable
				style={{
					padding: 12,
				}}
				onPress={() => {
					setCurrentColorMode(currentColorMode === "dark" ? "light" : "dark");
				}}
			>
				{currentColorMode === "dark" ? (
					<Octicons name='sun' size={20} color='black' />
				) : (
					<Octicons name='moon' size={20} color='black' />
				)}
			</Pressable>
		</StyledProvider>
	);
}

export default ThemeSwitcher
