import React from 'react';
import { router } from 'expo-router';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { auth } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

import Apple from '@/assets/images/apple.svg';
import Google from '@/assets/images/google.svg';
import Itsme from '@/assets/images/itsme.svg';

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
			<Text style={styles.title}>Welcome back! Glad to see you, Again!</Text>
			<TextInput 
				style={styles.textInput}
				placeholder="Enter your email"
				placeholderTextColor="gray"
				value={email}
				onChangeText={setEmail} 
			/>
			<TextInput 
				style={styles.textInput}
				placeholder="Enter your password"
				placeholderTextColor="gray"
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={setPassword}
				secureTextEntry 
			/>
			<TouchableOpacity style={styles.forgotButton}>
				<Text style={styles.forgotText}>Mot de passe oublié ?</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button} onPress={signIn}>
				<Text style={styles.buttonText}>Se connecter</Text>
			</TouchableOpacity>
			<View style={styles.lineContainer}>
				<View style={styles.line} />
				<View>
					<Text style={styles.lineText}>Ou</Text>
				</View>
				<View style={styles.line} />
			</View>
			<View style={styles.squareContainer}>
				<TouchableOpacity style={styles.square} onPress={signUp}>
					<Apple width={38} height={38} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.square} onPress={signUp}>
					<Google width={38} height={38} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.square} onPress={signUp}>
					<Itsme width={38} height={38} />
				</TouchableOpacity>
			</View>
			<TouchableOpacity style={styles.anoButton} onPress={signInAnon}>
				<Text style={styles.anoText}>Se connecter en invité</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#181B24',
	},
	title: {
		width: '100%',
		padding: 40,
		marginTop: 60,
		marginBottom: 60,
		fontSize: 28,
		fontFamily: 'Black',
		fontWeight: 'bold',
		color: 'white',
	},
	textInput: {
		height: 55,
		borderWidth: 1,
		borderRadius: 16,
		borderColor: '#BABABA',
		width: '80%',
		marginVertical: 10,
		backgroundColor: 'white',
	},
	forgotButton: {
		width: '80%',
	},
	forgotText: {
		fontSize: 12,
		fontFamily: 'Medium',
		color: 'gray',
		textAlign: 'right',
		paddingRight: 10,
	},
	button: {
		width: '80%',
		height: 55,
		marginVertical: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
		backgroundColor: '#FF47BC',
		boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
	},
	buttonText: {
		fontSize: 18,
		fontFamily: 'Medium',
		color: 'white',
	},
	lineContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 40,
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: '#BABABA'
	},
	lineText: {
		width: 50,
		textAlign: 'center',
		color: '#BABABA',
	},
	squareContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingHorizontal: 40,
	},
	square: {
		width: 105,
		height: 75,
		marginVertical: 20,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 16,
		backgroundColor: 'white',
		boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
	},
	anoButton: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
		paddingBottom: 25,
	},
	anoText: {
		fontSize: 18,
		fontFamily: 'Medium',
		color: 'gray',
		textAlign: 'center',
		padding: 20,
	}
});

export default index;
