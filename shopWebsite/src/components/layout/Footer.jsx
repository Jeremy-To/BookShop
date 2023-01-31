import React from 'react';
import classes from './Footer.module.css';

function Footer() {
	return (
		<footer className={classes.main}>
			<div className={classes.info}>
				<p>Shop App is the place to sell your books. </p>
				<p>Made by Jérémy TO</p>
			</div>
            <div className={classes.contact}>
            <a href="https://www.linkedin.com/in/jérémy-to/">Contact me via Linkedin</a>
            <a href="https://github.com/Jeremy-To">Take a look at my work</a>
            </div>
		</footer>
	);
}

export default Footer;
