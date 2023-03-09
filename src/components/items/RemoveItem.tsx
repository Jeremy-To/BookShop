import React from 'react';
import { Link } from 'react-router-dom';

interface RemoveButtonProps {
	itemId: number;
}

const RemoveButton = ({ itemId }: RemoveButtonProps) => {
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

	return (
		<button
			className="bg-transparent bg-red-300 text-gray-700 font-inherit hover:bg-red-500 py-2 px-4 rounded mb-2 mx-4"
			onClick={handleRemove}
		>
			<Link to="/">Remove from shop</Link>
		</button>
	);
};

export default RemoveButton;
