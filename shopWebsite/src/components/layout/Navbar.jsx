import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';
import CartContext from '../../store/on-cart-context';

function Navbar() {
	const itemCartCtx = useContext(CartContext);

	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link to="/">ShopApp</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/shop">Shop</Link>
					</li>
					<li>
						<Link to="/add-items">Add Item</Link>
					</li>
					<li>
						<Link to="/cart">
							My Cart
							{itemCartCtx.totalOnCart > 0 && (<span className={classes.badge}>{itemCartCtx.totalOnCart}</span>)}
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
