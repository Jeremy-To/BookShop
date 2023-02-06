import { useContext } from 'react';

import CartContext from '../store/on-cart-context';
import Items from '../components/items/Items';

function OnCartPage() {
	const cartCtx = useContext(CartContext);

	let content;

	if (cartCtx.totalOnCart === 0) {
		content = <p className='p-10'>You got no items on cart yet. Start adding some?</p>;
	} else {
		content = <Items items={cartCtx.onCart} />;
	}

	return (
		<section className='flex flex-col justify-center'>
			<h1 className='text-2xl font-bold p-10'>My Cart</h1>
			{content}
		</section>
	);
}

export default OnCartPage;
