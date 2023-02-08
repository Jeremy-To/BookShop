import React from 'react';

function Footer() {
	return (
		<footer
			className="w-full lg:h-10 h-16 flex items-center justify-between px-10 bottom-0 bg-blue-300"
		>
			<div className="italic">
				<p>Shop App is the place to sell your books. </p>
				<p>Made by Jérémy TO</p>
			</div>
			<ul className="list-none flex items-center text-white font-medium m-0 p-0 gap-10 ">
				<li className=" hover:text-blue-600 ">
					<a href="https://www.linkedin.com/in/jérémy-to/">
						Contact me via Linkedin
					</a>
				</li>
				<li className="hover:text-blue-600">
					<a href="https://github.com/Jeremy-To">Take a look at my work</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
