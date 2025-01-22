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
				tabBarActiveTintColor: 'white',
				tabBarInactiveTintColor: 'gray',
				tabBarStyle: styles.tabBarStyle,
				tabBarLabelStyle: styles.tabBarLabelStyle,		
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
	tabBarLabelStyle: {
		fontSize: 12,
	},
	tabBarStyle: {
		position: 'absolute',
		bottom: 5,
		elevation: 0,
		shadowOpacity: 0,
		borderTopWidth: 0,
		backgroundColor: 'transparent',
	},	
});

export default Navigation;
