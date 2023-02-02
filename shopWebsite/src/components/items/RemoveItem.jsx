import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RemoveButton = ({ itemId }) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleRemove = async () => {
		setIsLoading(true);
		try {
			await fetch(
				`https://react-f55c8-default-rtdb.europe-west1.firebasedatabase.app/items/${itemId}.json`,
				{
					method: 'DELETE',
				}
			).then(() => {
				navigate('/shop');
			});
		} catch (error) {
			console.error(error);
			alert(
				'An error occurred while removing the item. Please try again later.'
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<button disabled={isLoading} onClick={handleRemove}>
			{isLoading ? 'Removing...' : 'Remove'}
		</button>
	);
};

export default RemoveButton;
