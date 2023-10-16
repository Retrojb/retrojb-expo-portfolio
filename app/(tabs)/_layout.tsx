import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ThemeSwitcher from "../../components/ThemeSwitcher/themeSwitcher";


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
		<Tabs
			screenOptions={{
				headerRight: () => <ThemeSwitcher currentTheme={colorScheme} />,
			}}
		>
			<Tabs.Screen
				name='Home'
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => (
						<AntDesign name='home' size={24} color='black' />
					),
				}}
			/>
			<Tabs.Screen
				name='Developer'
				options={{
					title: "Developer",
					tabBarIcon: ({ color }) => (
						<AntDesign name='codesquare' size={24} color='black' />
					),
				}}
			/>
			<Tabs.Screen
				name='Hobbies'
				options={{
					title: "Hobbies",
					tabBarIcon: ({ color }) => (
						<AntDesign name='meh' size={24} color='black' />
					),
				}}
			/>
			<Tabs.Screen
				name='AboutMe'
				options={{
					title: "About Me",
					tabBarIcon: ({ color }) => (
						<AntDesign name='smileo' size={24} color='black' />
					),
				}}
			/>
		</Tabs>
	);
}
