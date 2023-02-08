import { createContext, useState } from 'react';

const CartContext = createContext({
	onCart: [],
	totalOnCart: 0,
	addOnCart: (cartItem) => {},
	removeFromCart: (itemsId) => {},
	itemIsOnCart: (itemsId) => {},
});

export function CartContextProvider(props) {
	const [userCartItem, setUserCartItem] = useState([]);
 

	function addOnCartHandler(cartItem) {
		setUserCartItem((prevUserCartItem) => {
			return prevUserCartItem.concat(cartItem);
		});
	}

	function removeFromCartHandler(itemsId) {
		setUserCartItem((prevUserCartItem) => {
			return prevUserCartItem.filter((items) => items.id !== itemsId);
		});
	}

	function itemIsOnCartHandler(itemsId) {
		return userCartItem.some((items) => items.id === itemsId);
	}

	const context = {
		onCart: userCartItem,
		totalOnCart: userCartItem.length,
		addOnCart: addOnCartHandler,
		removeFromCart: removeFromCartHandler,
		itemIsOnCart: itemIsOnCartHandler,
	};

	return (
		<CartContext.Provider value={context}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartContext;
