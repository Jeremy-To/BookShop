import { useState, useEffect } from 'react';

import Items from '../components/items/Items';

function AllItemsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedItems, setLoadedItems] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(
			'https://react-f55c8-default-rtdb.europe-west1.firebasedatabase.app/items.json'
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const items = [];

				for (const key in data) {
					const item = {
						id: key,
						...data[key],
					};

					items.push(item);
				}

				setIsLoading(false);
				setLoadedItems(items);
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
		<section className='flex justify-center flex-wrap'>
			<h1 className="font-serif text-2xl p-10">All Items</h1>
			<Items items={loadedItems} />
		</section>
	);
}

export default AllItemsPage;
