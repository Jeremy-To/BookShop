import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../store/on-cart-context';
import Items from '../components/items/Items';

function OnCartPage() {
	const cartCtx = useContext(CartContext);

	const totalPrice = Number(
		cartCtx.onCart.reduce((acc, items) => acc + items.price, 0)
	);

	return (
		<section className="flex flex-col flex-wrap justify-center items-center">
			<div className="flex items-center justify-center flex-wrap">
				<h1 className="lg:py-20 lg:p-10 mt-2 text-2xl font-bold ">My Cart</h1>
				{cartCtx.totalOnCart === 0 ? (
					<p className="p-10">
						You got no items on cart yet. Start adding some?
					</p>
				) : (
					<div className='flex flex-col items-center justify-center'>
						<Items items={cartCtx.onCart} />
						<button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:text-white">
							<Link to="/Checkout">Pay Here</Link>
						</button>
					</div>
				)}
				{totalPrice != 0 && (
					<p className="  rounded-md border-solid border-2 text-center">
						Total: {totalPrice}$
					</p>
				)}
			</div>
		</section>
	);
}

export default OnCartPage;
