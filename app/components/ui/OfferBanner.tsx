import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

import { OfferBannerProps } from '@/app/models/OfferBanner';

const OfferBanner: React.FC<OfferBannerProps> = ({ id, title, description, salary, society }) => {
	const [saved, setSaved] = useState(false);

	return (
		<View style={styles.container}>
			<BlurView intensity={50} tint='light' style={styles.card}>
				<SafeAreaView style={styles.titleSalaryContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.salary}>{salary}</Text>
				</SafeAreaView>
				<Text style={styles.description}>{description}</Text>
				<Pressable onPress={() => setSaved(!saved)} style={styles.saveButton}>
					{saved ? <Ionicons name="heart" size={24} color="red" /> : <Ionicons name="heart-outline" size={24} color="red" />}
				</Pressable>
			</BlurView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "red",
	},
	card: {
		width: '90%',
		padding: 20,
		margin: 10,
		borderRadius: 25,
		backgroundColor: "rgba(255, 255, 255, 0.15)",
		borderWidth: 0.8,
		borderColor: "rgba(255, 255, 255, 0.4)",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 10 },
		shadowOpacity: 0.1,
		shadowRadius: 20,
		elevation: 10,
	},
	title: {
		fontSize: 22,
		fontWeight: '600',
		color: '#333',
		textAlign: 'center',
		marginBottom: 10,
	},
	salary: {
		fontSize: 16,
		color: 'green',
		marginVertical: 5,
	},
	description: {
		fontSize: 16,
		color: '#555',
		marginBottom: 10,
	},
	saveButton: {
		position: 'absolute',
		bottom: 10,
		right: 10,
	},
	titleSalaryContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export default OfferBanner;
