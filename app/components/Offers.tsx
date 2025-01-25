import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import { db } from '../../FirebaseConfig';
import { collection, getDocs, query, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import OfferBanner from '@/app/components/ui/OfferBanner';

const Offers = () => {
	const [offers, setOffers] = useState<any[]>([]);
	const auth = getAuth();
	const user = auth.currentUser;
	const offersCollection = collection(db, 'offers');

	const getOffers = async () => {
		const data = await getDocs(query(offersCollection));
		const setOffers = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	};

	useEffect(() => {
		getOffers();
	}, [user]);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={offers}
				renderItem={({ item }) => <OfferBanner {...item} />}
				keyExtractor={(item) => item.id.toString()}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
	},
});

export default Offers;
