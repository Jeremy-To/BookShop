import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../store/on-cart-context';
import Items from '../components/items/Items';

function OnCartPage() {
	const cartCtx = useContext(CartContext);

	let content;
	const totalPrice = Number(
		cartCtx.onCart.reduce((acc, items) => acc + items.price, 0)
	);

	if (cartCtx.totalOnCart === 0) {
		content = (
			<p className="p-10">
				You got no items on cart yet. Start adding some?
			</p>
		);
	} else {
		content = <Items items={cartCtx.onCart} />;
	}

	return (
		<section className="flex flex-col flex-wrap justify-center items-center">
			<div className="flex justify-center items-center flex-wrap">
				<h1 className="lg:py-20 lg:p-10 mt-2 text-2xl font-bold ">My Cart</h1>
				{content}

				{totalPrice != 0 && (
					<p className="lg:my-20 lg:mx-10 px-3 py-9 rounded-md border-solid border-2 text-center">Total: {totalPrice}$</p>
				)}
			</div>
			<button className="lg:mt-10 mt-4 py-5 px-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg hover:text-white">
				<Link to="/Checkout">Pay Here</Link>
			</button>
		</section>
	);
}

export default OnCartPage;
