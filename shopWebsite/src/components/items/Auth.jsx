import { useContext, useState } from 'react';
import Home from '../../pages/Home';
import { AuthContext } from '../../store/auth-context';


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { updateLoginStatus, signIn, isAuth } = useContext(AuthContext);

  const emailHandler = () => {
    signIn(email, password);
  }

  if(isAuth) {
    return <Home />
  }

	return (
		<section className="">
			<div className="flex flex-col items-center">
				<h1 className="inline-block text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-2xl my-8 font-bold">
					With BookShop, share and sell the books that you loved
				</h1>
			</div>
			<div className=" flex justify-center items-center rounded-md shadow my-5 mx-10">
				<div>
					<button
						className="mx-10 w-40 h-16 rounded-md cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white"
						onClick={updateLoginStatus}
					>
						Sign In with Google
					</button>
				</div>
        <div>
          <p className='italic mr-10' >Or</p>
        </div>
				<div className="flex items-center justify-center my-2">
					<div>
						<label
							className="block text-gray-700 font-medium mb-2"
							htmlFor="email"
						>
							Enter your Email
						</label>
						<input
							className="shadow"
							placeholder="Email..."
							type="text"
							id="email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label
							className=" block text-gray-700 font-medium mb-2"
							htmlFor="password"
						>
							Enter your Password
						</label>
						<input
							className="shadow"
							placeholder="Password..."
							type="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</div>
				<button className='m-2 border-solid border-2 rounded-md' onClick={emailHandler}> Sign In</button>
			</div>
		</section>
	);
};
export default Auth;
