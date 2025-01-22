import { View, Text, StyleSheet } from 'react-native';

function NotFoundScreen() {
	return (
		<View style={styles.container}>
			<Text>Not Found</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default NotFoundScreen;
