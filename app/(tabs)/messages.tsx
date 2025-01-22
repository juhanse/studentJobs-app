import { SafeAreaView, Text, StyleSheet } from 'react-native';

function Messages() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>Messages</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'pink',	
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',	
	},
});

export default Messages;
