import { useNavigate } from 'react-router-dom';

import AddItems from '../components/items/NewItemForm';

function NewItemPage() {
	const navigate = useNavigate();

	function addItemHandler(meetupData) {
		fetch(
			'https://react-f55c8-default-rtdb.europe-west1.firebasedatabase.app/items.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		).then(() => {
			navigate('/shop');
		});
	}

	return (
		<section>
			<AddItems onAddMeetup={addItemHandler} />
		</section>
	);
}

export default NewItemPage;
