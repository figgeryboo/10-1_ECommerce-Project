import React, { useState } from 'react';

function CheckoutForm({ handleCheckout }) {
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

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleCheckout(formData);
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
        alert('Thank you for your purchase!')
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Name:</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Address 1:</label>
				<input
					type="text"
					name="address"
					value={formData.address}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Address 2:</label>
				<input
					type="text"
					name="addressTwo"
					value={formData.addressTwo}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>City:</label>
				<input
					type="text"
					name="city"
					value={formData.city}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>State:</label>
				<input
					type="text"
					name="state"
					value={formData.state}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Zip Code:</label>
				<input
					type="number"
					name="zipCode"
					value={formData.zipCode}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Email:</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Card Number:</label>
				<input
					type="password"
					name="cardNumber"
					value={formData.cardNumber}
					onChange={handleChange}
					maxLength="16"
					title="Please enter a valid card number in the format xxxx xxxx xxxx xxxx"
					required
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
}

export default CheckoutForm;
