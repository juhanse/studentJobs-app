import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

interface OffersProps {
	title: string;
	salary: string;
	description: string;
}

const Offers: React.FC<OffersProps> = ({ title, salary, description }) => {
	const [saved, setSaved] = useState(false);

	return (
		<BlurView intensity={50} style={styles.offerContainer}>
		<View style={styles.titleSalaryContainer}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.salary}>{salary}</Text>
		</View>
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

export default Offers;
