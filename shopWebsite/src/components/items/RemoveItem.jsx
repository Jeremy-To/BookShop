import React from 'react';

const RemoveButton = ({ itemId }) => {
	const handleRemove = async () => {
		try {
			await fetch(
				`https://react-f55c8-default-rtdb.europe-west1.firebasedatabase.app/items/${itemId}.json`,
				{
					method: 'DELETE',
				}
			);
		} catch (error) {
			console.error(error);
			alert(
				'An error occurred while removing the item. Please try again later.'
			);
		}
	};

	return <button onClick={handleRemove}>Remove</button>;
};

export default RemoveButton;
