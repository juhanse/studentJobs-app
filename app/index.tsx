import React from 'react';
import { router } from 'expo-router';
import { StyleSheet, TextInput, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { auth } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

const index = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const signIn = async () => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			if (user) router.replace('/(tabs)');
			console.log(user);
		} catch (error: any) {
			alert('Sign in failed: ' + error.message);
			console.log(error);
		}
	}

	const signUp = async () => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			if (user) router.replace('/(tabs)');
			console.log(user);
		} catch (error: any) {
			alert('Sign up failed: ' + error.message);
			console.log(error);
		}
	}

	const signInAnon = async () => {
		try {
			const user = await signInAnonymously(auth);
			if (user) router.replace('/(tabs)');
			console.log(user);
		} catch (error: any) {
			alert('Sign in failed: ' + error.message);
			console.log(error);
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text>Welcome to the app</Text>
			<TextInput 
				style={styles.textInput}
				placeholder="Email"
				placeholderTextColor="gray"
				value={email}
				onChangeText={setEmail} 
			/>
			<TextInput 
				style={styles.textInput}
				placeholder="Password"
				placeholderTextColor="gray"
				value={password}
				onChangeText={setPassword}
				secureTextEntry 
			/>
			<TouchableOpacity style={styles.button} onPress={signIn}>
				<Text style={styles.buttonText}>Sign In</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={signUp}>
				<Text style={styles.buttonText}>Sign Up</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={signInAnon}>
				<Text style={styles.buttonText}>Sign In Anonymously</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'pink',
	},
	title: {
		fontSize: 28,
		fontFamily: 'Black',
		fontWeight: 'bold',
		color: '#456abf',
	},
	textInput: {
		borderWidth: 2,
		borderRadius: 8,
		borderColor: 'gray',
		width: '80%',
		height: 40,
		marginVertical: 10,
		backgroundColor: 'white',
	},
	button: {
		width: '80%',
		height: 50,
		marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		backgroundColor: '#456abf',
		boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
	},
	buttonText: {
		fontSize: 18,
		fontFamily: 'Medium',
		color: 'white',
	},
});

export default index;
