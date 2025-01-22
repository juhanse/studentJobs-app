import React from 'react';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from '@/hooks/useColorScheme';

function Navigation() {
	const colorScheme = useColorScheme();

  	return (
		<Tabs
			screenOptions={() => ({
				tabBarActiveTintColor: "pink",
				tabBarInactiveTintColor: "gray",
				tabBarStyle: styles.tabBar,
				headerStyle: styles.header,
				headerTitleStyle: styles.headerTitle,
				headerShown: false,
			})}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
					  <Ionicons name="home" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="messages"
				options={{
					tabBarLabel: 'Messages',
					tabBarIcon: ({ color }) => (
					  <Ionicons name="mail" size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color }) => (
					  <Ionicons name="settings" size={24} color={color} />
					),
				}}
			/>
		</Tabs>
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

export default Navigation;
