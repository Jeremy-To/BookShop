import { useContext } from 'react';

import CartContext from '../store/on-cart-context';
import Items from '../components/items/Items';

function OnCartPage() {
	const cartCtx = useContext(CartContext);

	let content;

	if (cartCtx.totalOnCart === 0) {
		content = <p>You got no items on cart yet. Start adding some?</p>;
	} else {
		content = <Items items={cartCtx.onCart} />;
	}

	return (
		<section>
			<h1>My Cart</h1>
			{content}
		</section>
	);
}

export default OnCartPage;
