import { Stack } from "expo-router";


const HobbiesNavigator = (): JSX.Element => (
  <Stack>
    <Stack.Screen name={'index'} options={{ headerShown: false}} />
  </Stack>
);

export default HobbiesNavigator;
