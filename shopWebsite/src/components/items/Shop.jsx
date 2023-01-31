import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './Shop.module.css';
import CartContext from '../../store/on-cart-context';

function Shop(props) {
	const itemCtx = useContext(CartContext);

	const itemIsOnCart = itemCtx.itemIsOnCart(props.id);

	function ItemIsOnCartHandler() {
		if (itemIsOnCart) {
			itemCtx.removeFromCart(props.id);
		} else {
			itemCtx.addOnCart({
				id: props.id,
				title: props.title,
				description: props.description,
				image: props.image,
				price: props.price,
			});
		}
	}

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<p>{props.price} $</p>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={ItemIsOnCartHandler}>
						{itemIsOnCart ? 'Remove from Cart' : 'To Cart'}
					</button>
				</div>
			</Card>
		</li>
	);
}

export default Shop;
