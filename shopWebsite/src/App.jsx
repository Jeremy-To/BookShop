import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Shop from './pages/Shop';
import AddItems from './pages/AddItem';
import Cart from './pages/Cart';
import Layout from './components/layout/Layout';
import Checkout from './pages/Checkout';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/add-items" element={<AddItems />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
		</Layout>
	);
}

export default App;
