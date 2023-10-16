import { Stack } from "expo-router";


const DeveloperNavigator = (): JSX.Element => (
  <Stack>
    <Stack.Screen name={'index'} options={{ headerShown: false}} />
  </Stack>
);

export default DeveloperNavigator;
