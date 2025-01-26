import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import OfferBanner from '@/app/components/ui/OfferBanner';

const Offers = () => {
	const offers = [
		{
			id: 1,
			title: "Front-end web junior",
			description: "We're looking for a junior front-end web developer to join our team.",
			salary: 24,
			society: "Google",
		},
		{
			id: 2,
			title: "Back-end web junior",
			description: "We're looking for a junior back-end web developer to join our team.",
			salary: 22,
			society: "Facebook",
		},
		{
			id: 3,
			title: "Full-stack web junior",
			description: "We're looking for a junior full-stack web developer to join our team.",
			salary: 26,
			society: "Amazon",
		},
		{
			id: 4,
			title: "Mobile junior",
			description: "We're looking for a junior mobile developer to join our team.",
			salary: 30,
			society: "Apple",
		},
		{
			id: 5,
			title: "DevOps junior",
			description: "We're looking for a junior DevOps to join our team.",
			salary: 28,
			society: "Microsoft",
		},
		{
			id: 6,
			title: "Data scientist junior",
			description: "We're looking for a junior data scientist to join our team.",
			salary: 32,
			society: "IBM",
		}
	];

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FlatList
				data={offers}
				renderItem={({ item }) => <OfferBanner {...item} />}
				keyExtractor={item => item.id.toString()}
			/>
		</SafeAreaView>
	);
};

export default Offers;
