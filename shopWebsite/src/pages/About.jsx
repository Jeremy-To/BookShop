import React from 'react';

function About() {
	return (
		<section className="m-4 md:m-30 lg:m-40 flex flex-col items-center p-10 border-solid rounded-md border-blue-300 border-2">
			<div className="italic m-2">
				<p>BookShop is the place to sell your books. </p>
			</div>
			<p>Made with &#10084; by Jérémy TO</p>
			<ul className="list-none flex font-medium flex-col text-blue-300">
				<li className=" hover:text-blue-800 hover:underline m-2">
					<a href="https://www.linkedin.com/in/jérémy-to/">
						Contact me via Linkedin
					</a>
				</li>
				<li className="hover:text-blue-800 hover:underline m-2">
					<a href="https://github.com/Jeremy-To">Take a look at my work</a>
				</li>
			</ul>
		</section>
	);
}

export default About;
