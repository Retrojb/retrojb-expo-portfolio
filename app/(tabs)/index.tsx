import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Box, Button, ButtonText, styled, StyledProvider, Text, View } from "@gluestack-ui/themed";
import { config } from "@config/gluestack-ui.config";

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
export function ColorMode({ ...args }) {
  const [currentColorMode, setCurrentColorMode] = React.useState("light")

  return (
    <StyledProvider config={config} colorMode={currentColorMode}>
      <Pressable
        style={{
          backgroundColor: "gray",
          padding: 12,
          marginBottom: 12,
        }}
        onPress={() => {
          setCurrentColorMode(currentColorMode === "dark" ? "light" : "dark")
        }}
      >
        <Text style={{ color: "white" }}>
          Toggle {currentColorMode === "dark" ? "light" : "dark"}
        </Text>
      </Pressable>
      <StyledButton />
    </StyledProvider>
  )
}
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Button bg={'$primary800'}>
        <ButtonText>Hooray</ButtonText>
      </Button>
        <ColorMode />
      <Box>

      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
