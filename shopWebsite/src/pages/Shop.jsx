import { useState, useEffect } from 'react';

import Items from '../components/items/Items';

function AllItemsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedItems, setLoadedItems] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			'https://react-f55c8-default-rtdb.europe-west1.firebasedatabase.app/Items.json'
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const Items = [];

				for (const key in data) {
					const item = {
						id: key,
						...data[key],
					};

					Items.push(item);
				}

				setIsLoading(false);
				setLoadedItems(Items);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Items</h1>
			<Items items={loadedItems} />
		</section>
	);
}

export default AllItemsPage;
