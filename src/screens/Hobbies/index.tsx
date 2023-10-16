import { ScrollView, Text } from "react-native";
type ScreenProps = {
  path: string
}
const HobbiesScreen = ({path}: ScreenProps) => {
  return (
    <ScrollView>
      <Text>Hobbies</Text>
    </ScrollView>
  )
}

export default HobbiesScreen
