import React, { useState, useEffect } from 'react';
import CheckoutForm from './CheckoutForm';

function CheckoutPage({ cart }) {
    const [total, setTotal] = useState('0.00');
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        addressTwo: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        cardNumber: '',
    });

    useEffect(() => {
        function calculateTotal(cart) {
            return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
        }
        
        setTotal(calculateTotal(cart));
    }, [cart]);

    const handleCheckout = (formData) => {
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            address: '',
            addressTwo: '',
            city: '',
            state: '',
            zipCode: '',
            email: '',
            cardNumber: '',
        });
        setTotal('0.00');
    };

    return (
        <div>
            <h2>Checkout</h2>
            <div>Total: ${total}</div>
            <CheckoutForm handleCheckout={handleCheckout} formData={formData} />
        </div>
    );
}

export default CheckoutPage;
