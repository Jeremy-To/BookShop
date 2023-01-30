import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';
import CartContext from '../../store/on-cart-context';

function Navbar() {
	const itemCartCtx = useContext(CartContext);

	return (
		<header className={classes.header}>
			<div className={classes.logo}>Shop</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Shop</Link>
					</li>
					<li>
						<Link to="/add-items">Add Item</Link>
					</li>
					<li>
						<Link to="/cart">
							My Cart
							<span className={classes.badge}>
								{itemCartCtx.totalItems}
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
