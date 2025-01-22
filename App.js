import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import Home from '@/app/screens/home';
import Messages from '@/app/screens/messages';
import Settings from '@/app/screens/settings';

const Tab = createBottomTabNavigator();

function App() {
  return (
	<NavigationContainer>
		<Tab.Navigator
			screenOptions={() => ({
				tabBarActiveTintColor: "#6200ee",
				tabBarInactiveTintColor: "gray",
				tabBarStyle: styles.tabBar,
				headerStyle: styles.header,
				headerTitleStyle: styles.headerTitle,
			})}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
					  <Ionicons name="home" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Messages"
				component={Messages}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
					  <Ionicons name="mail" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={Settings}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
					  <Ionicons name="settings" size={24} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	</NavigationContainer>
  );
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f0f0f0",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#333",
	},
	tabBar: {
		backgroundColor: "#fff",
		borderTopWidth: 1,
		borderTopColor: "#ddd",
		height: 60,
		paddingBottom: 5,
	},
	header: {
	  	backgroundColor: "#6200ee",
	},
	headerTitle: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default App;
