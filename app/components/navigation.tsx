import { View, Text, Image, StyleSheet } from 'react-native';

function Navigation() {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
			<Image
				style={styles.image}
				source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 50,
		height: 50,
	},
});

export default Navigation;
