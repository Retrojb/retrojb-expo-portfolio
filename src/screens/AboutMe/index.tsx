import { JSX } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Box, Image, Text } from "@gluestack-ui/themed";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TitleComponent from "@components/shared/title";
type ScreenProps = {
  path: string
}
export const AboutMeScreen = ({path}: ScreenProps, text: TitleProps) : JSX.Element => {
  const profilePic = require("../../../assets/images/John.jpeg")
  return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.imageContainer}>
					<Image source={profilePic} size={"2xl"} alt={"Me"} />
				</View>
				<View style={styles.introductionContainer}>

            <TitleComponent title='john' />

					<Text>Neurodivergent Developer</Text>
				</View>
				<View style={styles.bodyContainer}>
					<Text>Stuff and things</Text>
				</View>
				<View style={styles.socialsContainer}>
					<Box>
						<AntDesign name='twitter' size={24} color='black' />
						<AntDesign name='github' size={24} color='black' />
						<AntDesign name='linkedin-square' size={24} color='black' />
						<MaterialCommunityIcons name='discord' size={24} color='black' />
						<AntDesign name='slack-square' size={24} color='black' />
						<MaterialIcons name='email' size={24} color='black' />
						<MaterialIcons name='web-asset' size={24} color='black' />
					</Box>
				</View>
				<View>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
						dictum fusce ut placerat orci nulla. At quis risus sed vulputate
						odio ut enim. Lorem sed risus ultricies tristique nulla aliquet. In
						nisl nisi scelerisque eu ultrices. Mus mauris vitae ultricies leo
						integer. Aliquet nibh praesent tristique magna sit amet purus
						gravida. Nulla facilisi morbi tempus iaculis urna id. Nisi quis
						eleifend quam adipiscing vitae proin. Suspendisse faucibus interdum
						posuere lorem ipsum dolor sit amet consectetur. Odio morbi quis
						commodo odio aenean sed adipiscing diam. A pellentesque sit amet
						porttitor eget dolor morbi non. Nibh tortor id aliquet lectus proin
						nibh nisl. Morbi tristique senectus et netus. In dictum non
						consectetur a erat nam at. Sem fringilla ut morbi tincidunt augue
						interdum. Elit ullamcorper dignissim cras tincidunt lobortis
						feugiat. Morbi enim nunc faucibus a pellentesque. Sed risus pretium
						quam vulputate. Ipsum a arcu cursus vitae. Sed libero enim sed
						faucibus turpis in eu mi bibendum. Pharetra convallis posuere morbi
						leo urna molestie at elementum eu. Ante in nibh mauris cursus
						mattis. Nulla at volutpat diam ut venenatis. Sit amet nisl purus in
						mollis nunc sed. Egestas diam in arcu cursus euismod quis viverra
						nibh. Facilisis volutpat est velit egestas. Non sodales neque
						sodales ut etiam sit. Nisi lacus sed viverra tellus in hac. Etiam
						tempor orci eu lobortis elementum nibh. Dictum varius duis at
						consectetur lorem donec massa sapien. Odio euismod lacinia at quis
						risus sed vulputate odio ut. At in tellus integer feugiat
						scelerisque varius. Pulvinar elementum integer enim neque. Duis at
						tellus at urna condimentum. Eu lobortis elementum nibh tellus.
						Sollicitudin ac orci phasellus egestas tellus. Cursus risus at
						ultrices mi tempus imperdiet nulla. Proin sagittis nisl rhoncus
						mattis rhoncus. Vitae justo eget magna fermentum iaculis eu non
						diam. Sed turpis tincidunt id aliquet risus feugiat in. Ultricies
						leo integer malesuada nunc vel risus commodo. A erat nam at lectus
						urna duis. Eget lorem dolor sed viverra ipsum. Ornare arcu dui
						vivamus arcu felis bibendum ut. Quis blandit turpis cursus in. Sed
						augue lacus viverra vitae congue eu consequat ac. Imperdiet nulla
						malesuada pellentesque elit eget gravida cum. Sit amet consectetur
						adipiscing elit ut aliquam purus sit amet. At volutpat diam ut
						venenatis tellus in metus vulputate eu. Tellus mauris a diam
						maecenas sed enim ut sem. Sapien faucibus et molestie ac feugiat.
						Purus gravida quis blandit turpis cursus in hac habitasse. Ac odio
						tempor orci dapibus. Luctus venenatis lectus magna fringilla urna
						porttitor. Vitae aliquet nec ullamcorper sit amet risus nullam. Amet
						cursus sit amet dictum sit amet justo donec. Dignissim suspendisse
						in est ante in nibh mauris cursus mattis. Sed turpis tincidunt id
						aliquet risus feugiat. Elementum nibh tellus molestie nunc non
						blandit massa enim nec. In massa tempor nec feugiat nisl pretium
						fusce id. Amet nisl purus in mollis nunc sed. Nullam ac tortor vitae
						purus. Lacus vel facilisis volutpat est velit egestas. Mauris nunc
						congue nisi vitae suscipit tellus. Id eu nisl nunc mi ipsum faucibus
						vitae aliquet nec. Mauris commodo quis imperdiet massa tincidunt
						nunc. Aliquam vestibulum morbi blandit cursus risus at ultrices mi
						tempus. Non blandit massa enim nec dui nunc mattis enim ut. Tortor
						consequat id porta nibh venenatis cras sed felis eget. Eget velit
						aliquet sagittis id consectetur purus ut. Dolor sit amet consectetur
						adipiscing elit. Cursus risus at ultrices mi tempus imperdiet nulla
						malesuada pellentesque. Accumsan sit amet nulla facilisi morbi. Ut
						eu sem integer vitae justo eget. Ultricies lacus sed turpis
						tincidunt id aliquet risus.
					</Text>
				</View>
			</View>
		</ScrollView>
	);
}

export default AboutMeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',

  },
  imageContainer: {
    backgroundColor: '#000000',
    alignSelf: "center",
    padding: 4,
    margin: 18
  },
  introductionContainer: {
    backgroundColor: '#00f300',
  },
  bodyContainer: {
    backgroundColor: '#f3f300',
  },
  socialsContainer: {
    backgroundColor: 'orange'
  }
});
