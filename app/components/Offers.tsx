import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import axios from 'axios';

import OfferBanner from '@/app/components/ui/OfferBanner';

const Offers = () => {
	const [offers, setOffers] = useState([]);

	const fetchOffers = async () => {
		try {
			const response = await axios.get('https://109.136.40.34:3000/offers');
	
			if (response.status === 200)
			{
				console.log(response.data);
				setOffers(response.data);
			}
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchOffers();
	}, [offers]);

	return (
		<SafeAreaView style={styles.container}>
			{offers.map((offer, index) => (
				<OfferBanner
					key={index}
					title={offer.title}
					salary={offer.salary}
					description={offer.description}
				/>
			))}
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
