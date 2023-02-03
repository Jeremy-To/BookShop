import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<div>
			<h1 className="font-bold text-4xl flex justify-center items-center">Welcome to my shop !</h1>
			<div className="flex flex-wrap relative justify-center items-center">
				<div className="flex flex-col justify-center items-center p-10 absolute rounded-md bg-white">
					<h2 className='text-xl'>The place to sell your books</h2>
					<Link to="/shop" className='hover:text-blue-600'>Go to store</Link>
				</div>
				<img src="/Library.jpg" alt="Image of a library shop"/>
			</div>
		</div>
	);
}

export default HomePage;
