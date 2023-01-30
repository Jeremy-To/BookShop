import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './Shop.module.css';
import CartContext from '../../store/on-cart-context';

function Shop(props) {
	const itemOnCartCtx = useContext(CartContext);

	const itemIsOnCart = itemOnCartCtx.itemIsOnCart(props.id);

	function toggleItemIsOnCartStatusHandler() {
		if (itemIsOnCart) {
			itemOnCartCtx.removeItem(props.id);
		} else {
			itemOnCartCtx.addItem({
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
					<price>{props.price}</price>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleItemIsOnCartStatusHandler}>
						{itemIsOnCart ? 'Remove from Cart' : 'To Cart'}
					</button>
				</div>
			</Card>
		</li>
	);
}

export default Shop;
