import { SafeAreaView, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<SafeAreaView style={styles.search}>
				<SearchBar />
			</SafeAreaView>
			<Text style={styles.text}>Home</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',	
	},
	search: {
		width: '90%',
		marginTop: 10,
		alignSelf: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',	
	},
});

export default Home;
