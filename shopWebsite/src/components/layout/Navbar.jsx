import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../store/on-cart-context';

function Navbar() {
	const cartCtx = useContext(CartContext);

	return (
		<header
			className="w-full h-20 flex items-center justify-between py-0 px-2"
			style={{
				backgroundColor: '#abcdef',
			}}
		>
			<div className="text-4xl text-white font-bold pl-4 hover:text-blue-500">
				<Link to="/">ShopApp</Link>
			</div>
			<nav>
				<ul className="list-none m-0 p-0 flex items-baseline text-xl">
					<li className="ml-10 hover:text-blue-500 active:text-blue-500 ">
						<Link to="/shop">Shop</Link>
					</li>
					<li className="ml-10 hover:text-blue-500 active:text-blue-500">
						<Link to="/add-items">Add Item</Link>
					</li>
					<li className="ml-10 hover:text-blue-500 active:text-blue-500">
						<Link to="/cart">My Cart</Link>
						{cartCtx.totalOnCart > 0 && (
							<span className="bg-blue-500 text-blue-50 rounded-md px-2 ml-2">
								{cartCtx.totalOnCart}
							</span>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
