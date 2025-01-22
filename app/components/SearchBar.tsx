import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.searchInput}
				placeholder="Search..."
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		marginTop: 10,
		alignSelf: 'center',
	},
	searchInput: {
		height: 40,
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 10,
		paddingHorizontal: 10,
	},
});

export default SearchBar;
