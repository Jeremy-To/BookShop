import About from '../../pages/About';
import { Link } from 'react-router-dom';

function HomePage() {
	return (
		<section>
			<div className="h-full flex relative flex-wrap justify-center items-center">
				<div className="flex flex-col justify-center items-center top-6 absolute rounded-md text-4xl bg-white p-2 font-bold">
					<h1>Welcome to my shop !</h1>
				</div>
				<div className="flex flex-col justify-center items-center p-2 absolute rounded-md bg-white">
					<h2 className="font-serif text-xl italic">The place to sell your books</h2>
					<Link to="/shop" className="font-serif text-blue-300 hover:text-red-600 hover:underline">
						Go to store
					</Link>
				</div>
				<div className="">
					<img src="/Library.jpg" alt="Image of a library shop" />
				</div>
			</div>
			<div className='lg:hidden'>
				<About />
			</div>
		</section>
	);
}

export default HomePage;
