import { Stack } from "expo-router";


const HomeNavigator = (): JSX.Element => (
  <Stack>
    <Stack.Screen name={'index'} options={{ headerShown: false}} />
  </Stack>
);

export default HomeNavigator;
