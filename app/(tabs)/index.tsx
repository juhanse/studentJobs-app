import { SafeAreaView, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import Offers from '../components/Offers';

function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<SafeAreaView style={styles.search}>
				<SearchBar />
			</SafeAreaView>
			<SafeAreaView style={styles.offers}>
				<Offers />
			</SafeAreaView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'transparent',	
	},
	search: {
		width: '80%',
		marginTop: 20,
		alignSelf: 'center',
	},
	offers: {
		flex: 1,
		marginTop: 50,
	},
});

export default Home;
