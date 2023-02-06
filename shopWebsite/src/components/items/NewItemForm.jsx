import { useRef } from 'react';

function NewItemForm(props) {
	const nameInputRef = useRef();
	const imageInputRef = useRef();
	const priceInputRef = useRef();
	const descriptionInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const enteredTitle = nameInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredPrice = priceInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const itemData = {
			title: enteredTitle,
			image: enteredImage,
			price: enteredPrice,
			description: enteredDescription,
		};

		props.onAddMeetup(itemData);
	}

	return (
		<form
			className="p-4 shadow flex flex-col justify-center items-center"
			onSubmit={submitHandler}
		>
			<div className="mb-2">
				<label className="font-bold mb-2" htmlFor="name">
					Item Name
				</label>
				<input
					className="block w-full p-0.25 rounded border border-gray-300 appearance-none leading-normal"
					type="text"
					required
					id="name"
					ref={nameInputRef}
				/>
			</div>
			<div className="mb-2">
				<label className="font-bold mb-2" htmlFor="image">
					Item Image
				</label>
				<input
					className="block w-full p-0.25 rounded border border-gray-300 appearance-none leading-normal"
					type="url"
					required
					id="image"
					ref={imageInputRef}
				/>
			</div>
			<div className="mb-2">
				<label className="font-bold mb-2" htmlFor="price">
					Price
				</label>
				<input
					className="block w-full p-0.25 rounded border border-gray-300 appearance-none leading-normal"
					type="number"
					required
					id="price"
					ref={priceInputRef}
				/>
			</div>
			<div className="mb-2">
				<label className="font-bold mb-2" htmlFor="description">
					Description
				</label>
				<textarea
					className="block w-full p-0.25 rounded border border-gray-300 appearance-none leading-normal"
					id="description"
					required
					rows="5"
					ref={descriptionInputRef}
				></textarea>
			</div>
			<div className="mt-1 text-right">
				<button className="bg-red-500 hover:bg-red-600 text-white font-bold py-0.5 px-1.5 rounded border border-red-500 cursor-pointer">
					Add Item
				</button>
			</div>
		</form>
	);
}

export default NewItemForm;
