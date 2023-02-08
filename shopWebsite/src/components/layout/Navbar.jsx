import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../store/on-cart-context';
import { AuthContext } from '../../store/auth-context';

function Navbar() {
	const cartCtx = useContext(CartContext);
	const authCtx = useContext(AuthContext);

	return (
		<header
			className="w-full h-20 flex items-center justify-between py-0 px-2 bg-blue-300"
		>
			<div className="text-4xl text-white font-bold pl-4 hover:text-blue-500">
				<Link to="/">ShopApp</Link>
			</div>
			<nav>
				<ul className="list-none m-0 p-0 flex items-baseline text-xl">
					<li className="ml-10 hover:text-blue-500 active:text-blue-500 ">
						<Link to="/shop">Shop</Link>
					</li>
					<li className="ml-10 hover:text-blue-500 active:text-blue-500 ">
						<Link to="/about">About</Link>
					</li>
					{authCtx.isAuth && (
						<>
							<li className="ml-10 hover:text-blue-500 active:text-blue-500">
								<Link to="/add-items">Add Item</Link>
							</li>
							<button className='ml-10 bg-red-400 rounded-md p-2' onClick={authCtx.updateLoginStatus}>Log out</button>
						</>
					)}
					{!authCtx.isAuth && (
						<li className="ml-10 bg-green-300 rounded-md p-2">
							<Link to="/auth">Login</Link>
						</li>
					)}
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
