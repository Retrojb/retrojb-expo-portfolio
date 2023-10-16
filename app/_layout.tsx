import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { JSX, useEffect, useState } from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import { GluestackUIStyledProvider, StyledProvider, useColorMode, View } from "@gluestack-ui/themed";
import { config } from "../config/gluestack-ui.config";
import QueryProvider from "../shared/providers/queryProviders";
export { ErrorBoundary } from 'expo-router';
import COLORMODES from "@gluestack-style/react/lib/typescript/types";
import { SafeAreaView, useColorScheme } from "react-native";

type ThemeProps = {
  children?: React.ReactNode;
  themeToggle?: ColorSchema;
  globalStyles?: object;
}

type ColorSchema = 'dark' | 'light' | 'auto'

export const unstable_settings = {
  initialRouteName: '(tabs)',
};
// const color = await SystemUI.getBackgroundColorAsync();

// Prevent the splash screen from auto-hiding before asset loading is complete.
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Regular: require('../assets/fonts/Inter-Regular.otf'),
    Bold: require('../assets/fonts/Inter-Bold.otf'),
    ExtraBold: require('../assets/fonts/Inter-ExtraBold.otf'),
    Italic: require('../assets/fonts/Inter-Italic.otf'),
    ItalicBold: require('../assets/fonts/Inter-BoldItalic.otf'),
    SemiBold: require('../assets/fonts/Inter-SemiBold.otf'),
    SemiBoldItalic: require('../assets/fonts/Inter-SemiBoldItalic.otf'),
    Light: require('../assets/fonts/Inter-Light.otf'),
    LightItalic: require('../assets/fonts/Inter-LightItalic.otf'),
    Medium: require('../assets/fonts/Inter-Medium.otf'),
    MediumItalic: require('../assets/fonts/Inter-MediumItalic.otf'),
    Thin: require('../assets/fonts/Inter-Thin.otf'),
    ThinItalic: require('../assets/fonts/Inter-ThinItalic.otf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryProvider>
      <RootNavLayout />
    </QueryProvider>
   );
}



const ThemeProvider = ({ children, themeToggle }: ThemeProps): JSX.Element => {
  const colorScheme = useColorMode() === 'dark' ? 'dark' : 'light';
  const theme = themeToggle && themeToggle !== 'auto' ? themeToggle : colorScheme;

  console.log('Theme Provider theme is:', colorScheme)
  return (
    <StyledProvider config={config} colorMode={theme === 'dark' ? 'dark' : 'light'}>
      {children}
    </StyledProvider>
  )
};
SplashScreen.preventAutoHideAsync();
const RootNavLayout = (): JSX.Element => {

return (
      <SafeAreaProvider>
        <ThemeProvider>
          <RootNav />
        </ThemeProvider>
      </SafeAreaProvider>
  )
};

function RootNav() {
  return (
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '$purple200',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name='[...missing]' options={{ title: 'OOPS'}} />
      </Stack>
  );
}
