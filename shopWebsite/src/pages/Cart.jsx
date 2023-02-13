import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../store/on-cart-context';
import Items from '../components/items/Items';

function OnCartPage() {
	const cartCtx = useContext(CartContext);

	return (
		<section className="flex flex-wrap justify-center ">
			<div className="flex flex-col flex-wrap">
				<h1 className="lg:py-20 lg:p-10 mt-2 text-2xl font-serif ">My Cart</h1>
			</div>
			<div>
				{cartCtx.totalOnCart === 0 ? (
					<div className="flex flex-col justify-center items-center">
						<p className="p-10 font-serif">
							You got no items on cart yet. Start adding some?
						</p>
						<button className="text-white bg-yellow-500 rounded-lg w-24 h-10">
							<Link to="/shop">Go to shop</Link>
						</button>
					</div>
				) : (
					<div className="flex flex-col items-center justify-center">
						<Items items={cartCtx.onCart} />
						<div className='flex justify-center items-center'>
							<button className="p-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
								<Link to="/checkout">Pay Here</Link>
							</button>
							<p className="m-8 p-2 text-center rounded-md border-solid border-2">
								Total: {cartCtx.totalPrice()}$
							</p>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default OnCartPage;
