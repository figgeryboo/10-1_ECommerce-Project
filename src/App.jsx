import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs.jsx';
import DonateForm from './Components/Donate/DonateForm.jsx';
import DonateFeed from './components/Donate/DonateFeed.jsx';
import Sidebar from './Components/Navigation/Sidebar.jsx';
import Footer from './Components/Navigation/Footer.jsx';
import DisplayCard from './Components/DisplayCard.jsx';
import Cart from './Components/Cart/Cart.jsx';
import CheckoutPage from './Components/Cart/CheckoutPage.jsx';
import './App.css';
import NavBar from './Components/Navigation/NavBar.jsx';
import SearchBar from './Components/Navigation/SearchBar.jsx';

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
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <DonateForm onDonate={handleDonate} />
              {donations.length > 0 && <DonateFeed donations={donations} />}
              <DisplayCard
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                cart={cart}
              />
              <Cart cart={cart} removeFromCart={handleRemoveFromCart} />
              <CheckoutPage cart={cart} removeFromCart={handleRemoveFromCart} />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Sidebar" element={<Sidebar/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;