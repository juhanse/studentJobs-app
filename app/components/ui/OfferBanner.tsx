import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const OfferBanner: React.FC<OfferBannerProps> = ({ title, salary, description, society }) => {
	const [saved, setSaved] = useState(false);

	return (
		<BlurView intensity={50} style={styles.offerContainer}>
			<SafeAreaView style={styles.titleSalaryContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.salary}>{salary}</Text>
			</SafeAreaView>
			<Text style={styles.description}>{description}</Text>
			<Pressable onPress={() => setSaved(!saved)} style={styles.saveButton}>
				{saved ? <Ionicons name="heart" size={24} color="red" /> : <Ionicons name="heart-outline" size={24} color="red" />}
			</Pressable>
		</BlurView>
	);
};

const styles = StyleSheet.create({
	offerContainer: {
		padding: 20,
		borderRadius: 10,
		margin: 10,
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		overflow: 'hidden',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},
	salary: {
		fontSize: 16,
		color: 'green',
		marginVertical: 5,
	},
	description: {
		fontSize: 14,
		color: 'white',
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
