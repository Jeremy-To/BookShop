import React from 'react';
import classes from './HomePage.module.css';
import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<div>
			<h1 className={classes.title}>Welcome to my shop !</h1>
			<div className={classes.image}>
				<div className={classes.link}>
                    <h2>The place to sell your books</h2>
					<Link to="/shop">Go to store</Link>
				</div>
				<img src="./public/LibraryShop.jpg" alt="Image of a library shop" />
			</div>
		</div>
	);
}

export default HomePage;
