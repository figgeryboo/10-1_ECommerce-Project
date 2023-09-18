import { useState } from 'react';
import AboutUs from './components/AboutUs.jsx';
import DonateForm from './components/Donate/DonateForm.jsx';
import DonateFeed from './components/Donate/DonateFeed.jsx';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import DisplayCard from './components/DisplayCard.jsx';
import Cart from './components/Cart/Cart.jsx';
import CheckoutPage from './components/Cart/CheckoutPage.jsx';
import './App.css';

function App() {
	const [donations, setDonations] = useState([]);
	const [cart, setCart] = useState([]);

	const handleDonate = (formData) => {
		const updatedDonations = [...donations, formData];

		if (updatedDonations.length > 5) {
			updatedDonations.shift();
		}

		setDonations(updatedDonations);
	};

	const handleAddToCart = (product) => {
		setCart([...cart, product]);
	};

	const handleRemoveFromCart = (product) => {
		const updatedCart = cart.filter((item) => item.id !== product.id);
		setCart(updatedCart);
	};

	return (
		<>
			<Sidebar />
			<div>
				<DonateForm onDonate={handleDonate} />
				{donations.length > 0 && <DonateFeed donations={donations} />}
				<DisplayCard
					onAddToCart={handleAddToCart}
					onRemoveFromCart={handleRemoveFromCart}
					cart={cart}
				/>
				<Cart cart={cart} removeFromCart={handleRemoveFromCart} />
				<CheckoutPage cart={cart} removeFromCart={handleRemoveFromCart} />
			</div>
			<Footer />
		</>
	);
}

export default App;
