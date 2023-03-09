import React, { createContext, useState } from 'react';

export interface CartItemType {
	id: number;
	title: string;
	description: string;
	image: string;
	price: number;
}

interface CartContextType {
	onCart: CartItemType[];
	totalOnCart: number;
	addOnCart: (cartItem: CartItemType) => void;
	removeFromCart: (itemId: number) => void;
	itemIsOnCart: (itemId: number) => boolean;
	totalPrice: number;
}

const CartContext = createContext<CartContextType>({
	onCart: [],
	totalOnCart: 0,
	addOnCart: (cartItem: CartItemType) => {},
	removeFromCart: (itemId: number) => {},
	itemIsOnCart: (itemId: number) => false,
	totalPrice: 0,
});
type CartContextProps = {
	children: React.ReactNode;
};

export const CartContextProvider: React.FC<CartContextProps> = ({
	children,
}) => {
	const [userCartItem, setUserCartItem] = useState<CartItemType[]>([]);

	const totalPrice = () => {
		return userCartItem.reduce((acc, item) => acc + Number(item.price), 0);
	};

	const addOnCartHandler = (cartItem: CartItemType) => {
		setUserCartItem((prevUserCartItem) => {
			return [...prevUserCartItem, cartItem];
		});
	};

	const removeFromCartHandler = (itemId: number) => {
		setUserCartItem((prevUserCartItem) => {
			return prevUserCartItem.filter((item) => item.id !== itemId);
		});
	};

	const itemIsOnCartHandler = (itemId: number) => {
		return userCartItem.some((item) => item.id === itemId);
	};

	const context: CartContextType = {
		onCart: userCartItem,
		totalOnCart: userCartItem.length,
		addOnCart: addOnCartHandler,
		removeFromCart: removeFromCartHandler,
		itemIsOnCart: itemIsOnCartHandler,
		totalPrice: totalPrice(),
	};

	return (
		<CartContext.Provider value={context}>{children}</CartContext.Provider>
	);
};

export default CartContext;
