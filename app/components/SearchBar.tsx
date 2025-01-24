import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, TextInput, StyleSheet, Pressable } from 'react-native';

const SearchBar = () => {
	const [search, setSearch] = useState('');

	if (search)
		console.log(search);

	return (
		<SafeAreaView style={styles.container}>
			<TextInput
				style={styles.searchInput}
				placeholder="Search..."
				placeholderTextColor="white"
				value={search}
				onChangeText={setSearch}
			/>
			<Pressable style={styles.searchIcon}>
				<Ionicons name="filter-circle" size={24} color="white" />
			</Pressable>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	searchInput: {
		height: 40,
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 10,
		paddingHorizontal: 10,
		fontSize: 16,
	},
	searchIcon: {
		position: 'absolute',
		right: 10,
		top: 7,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',	
	},
});

export default SearchBar;
