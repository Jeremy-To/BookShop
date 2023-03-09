import React, { useState, useContext } from 'react';
import CartContext from '../store/on-cart-context';
import { AuthContext } from '../store/auth-context';
import { Link } from 'react-router-dom';

function Checkout() {
	const [isCheckedOut, setIsCheckedOut] = useState(false);

	const authCtx = useContext(AuthContext);
	const cartCtx = useContext(CartContext);

	const CheckoutHandler = () => {
		setIsCheckedOut((current) => !current);
	};

	const total = cartCtx.totalPrice;

	if (authCtx.isAuthenticated === false) {
		return (
			<div className='flex justify-center items-center flex-col'>
				<h1 className='font-bold text-4xl text-red-400 mx-20 my-10'>Please log in first</h1>
				<button className="text-white bg-yellow-500 rounded-lg mx-20 my-28 p-10">
					<Link to="/auth">Log In</Link>
				</button>
			</div>
		);
	}

	if (isCheckedOut === true) {
		cartCtx.onCart.length = 0;
		cartCtx.totalOnCart = 0;
		return (
			<div className="flex justify-center items-center h-full">
				<h1 className="h-full mt-20 inline-block text-transparent bg-gradient-to-r from-yellow-600 via-orange-500 to-pink-600 bg-clip-text text-2xl my-8 mx-4 font-bold">
					Thanks for your purchase !!
				</h1>
			</div>
		);
	}
	return (
		<section>
			<div className="container mx-auto p-6">
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/2 mb-6">
						<h3 className="text-lg font-medium mb-2">Billing Address</h3>
						<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
							<div className="mb-4">
								<label
									className="block text-gray-700 font-medium mb-2"
									htmlFor="full-name"
								>
									Full Name
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="full-name"
									type="text"
									placeholder="John M. Doe"
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 font-medium mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="john@example.com"
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 font-medium mb-2"
									htmlFor="address"
								>
									Address
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="address"
									type="text"
									placeholder="542 W. 15th Street"
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 font-medium mb-2"
									htmlFor="city"
								>
									City
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="city"
									type="text"
									placeholder="New York"
								/>
							</div>
							<div className="flex mb-4">
								<div className="w-1/2 pr-4">
									<label
										className="block text-gray-700 font-medium mb-2"
										htmlFor="state"
									>
										State
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="state"
										type="text"
										placeholder="NY"
									/>
								</div>
								<div className="w-1/2 pl-4">
									<label
										className="block text-gray-700 font-medium mb-2"
										htmlFor="zip"
									>
										Zip
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="zip"
										type="text"
										placeholder="10001"
									/>
								</div>
							</div>
						</form>
					</div>
					<div className="w-full md:w-1/2 mb-6">
						<h3 className="text-lg font-medium mb-2">Payment Method</h3>
						<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
							<div className="mb-4">
								<label
									className="block text-gray-700 font-medium mb-2"
									htmlFor="card-number"
								>
									Card Number
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="card-number"
									type="text"
									placeholder="1234 5678 9012 3456"
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 font-medium mb-2"
									htmlFor="card-expiration"
								>
									Expiration Date
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="card-expiration"
									type="text"
									placeholder="MM/YY"
								/>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 font-medium mb-2"
									htmlFor="card-cvc"
								>
									CVC
								</label>
								<input
									className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="card-cvc"
									type="text"
									placeholder="123"
								/>
							</div>
						</form>
					</div>
					<div>
						<p>Total: {total}$</p>
					</div>
				</div>
				<div className="flex justify-center">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
						onClick={CheckoutHandler}
					>
						Place Order
					</button>
				</div>
			</div>
		</section>
	);
}

export default Checkout;
