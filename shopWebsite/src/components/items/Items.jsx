import Item from './Item';

function Items(props) {
	return (
		<ul className="list-none m-0 p-0 flex justify-center items-center">
			{props.items.map((item) => (
					<Item
						key={item.id}
						id={item.id}
						image={item.image}
						title={item.title}
						price={item.price}
						description={item.description}
					/>
			))}
		</ul>
	);
}

export default Items;
