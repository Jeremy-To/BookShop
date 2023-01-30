import { Route, Routes } from 'react-router-dom';

import Shop from './pages/Shop';
import AddItems from './pages/AddItem';
import Cart from './pages/Cart';
import Layout from './components/layout/Layout';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" exact element={<Shop />} />
				<Route path="/add-items" element={<AddItems />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Layout>
	);
}

export default App;
