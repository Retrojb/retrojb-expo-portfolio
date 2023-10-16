import { Stack } from "expo-router";


const AboutMeNavigator = (): JSX.Element => (
  <Stack>
    <Stack.Screen name={'index'} options={{ headerShown: false}} />
  </Stack>
);

export default AboutMeNavigator;
