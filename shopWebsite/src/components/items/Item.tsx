import { useContext } from 'react';
import Card from '../ui/Card';
import { AuthContext } from '../../store/auth-context';
import CartContext from '../../store/on-cart-context';
import RemoveButton from './RemoveItem';

export interface ItemProps {
	id: number;
	title: string;
	description: string;
	image: string;
	price: number;
}

function Item(props: ItemProps) {
	const cartCtx = useContext(CartContext);
	const authCtx = useContext(AuthContext);

	const itemIsOnCart = cartCtx.itemIsOnCart(props.id);

	const itemIsOnCartHandler = () => {
		if (itemIsOnCart) {
			cartCtx.removeFromCart(props.id);
		} else {
			cartCtx.addOnCart({
				id: props.id,
				title: props.title,
				description: props.description,
				image: props.image,
				price: props.price,
			});
		}
	};

	return (
		<li className="m-4 flex">
			<Card>
				<div className="shadow overflow-hidden rounded-md relative">
					<img
						className="w-96 mx-auto object-cover"
						src={props.image}
						alt={props.title}
					/>
					<b className="text-xl absolute top-3 right-2 bg-white rounded-md p-2">
						{props.price} $
					</b>
				</div>
				<div className="shadow h-60 w-80 border-solid border-2 rounded-md flex flex-col justify-center">
					<div className="flex items-center justify-evenly">
						<h3 className="mx-2 text-xl shadow">{props.title}</h3>
					</div>
					<p className="italic mx-2 shadow my-2 lg:my-6">{props.description}</p>
					<div className="flex flex-col justify-center">
						<button
							className="bg-transparent bg-red-300 text-gray-700 font-inherit hover:bg-red-500 py-2 px-4 rounded my-1 mx-4"
							onClick={itemIsOnCartHandler}
						>
							{itemIsOnCart ? 'Remove from Cart' : 'To Cart'}
						</button>
						{authCtx.isAuth && <RemoveButton itemId={props.id} />}
					</div>
				</div>
			</Card>
		</li>
	);
}

export default Item;
