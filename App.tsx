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
		screenOptions={({ route }) => ({
			tabBarIcon: ({ color, size }) => {
				let iconName: keyof typeof Ionicons.glyphMap = "home-outline";
	
				if (route.name === "Home")
					iconName = "home-outline";
				else if (route.name === "Messages")
					iconName = "chatbubble-outline";
				else if (route.name === "Settings")
					iconName = "settings-outline";
	
				return <Ionicons name={iconName} size={size} color={color} />;
			},
			tabBarActiveTintColor: "#6200ee",
			tabBarInactiveTintColor: "gray",
			tabBarStyle: styles.tabBar,
			headerStyle: styles.header,
			headerTitleStyle: styles.headerTitle,
		  })}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Messages" component={Messages} />
			<Tab.Screen name="Settings" component={Settings} />
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
