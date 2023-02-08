import { useContext } from 'react';
import Card from '../ui/Card';
import { AuthContext } from '../../store/auth-context';
import CartContext from '../../store/on-cart-context';
import RemoveButton from './RemoveItem';

function Item(props) {
	const cartCtx = useContext(CartContext);
	const authCtx = useContext(AuthContext);

	const itemIsOnCart = cartCtx.itemIsOnCart(props.id);

	const ItemIsOnCartHandler = () => {
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
				<div className="shadow overflow-hidden rounded-md">
					<img className='w-96 mx-auto object-cover' src={props.image} alt={props.title} />
				</div>
				<div className="shadow h-60 w-80 border-solid border-2 rounded-md flex flex-col justify-center items-center">
					<h3 className='mx-2.5 text-xl'>{props.title}</h3>
					<p className='italic ml-2'>{props.description}</p>
					<b>{props.price} $</b>
				</div>
				<div className="flex flex-col justify-center">
					<button className="bg-transparent bg-red-300 text-gray-700 font-inherit hover:bg-red-500 py-2 px-4 rounded" onClick={ItemIsOnCartHandler}>
						{itemIsOnCart ? 'Remove from Cart' : 'To Cart'}
					</button>
				{authCtx.isAuth &&	<RemoveButton itemId={props.id}/>}
				</div>
			</Card>
		</li>
	);
}

export default Item;
