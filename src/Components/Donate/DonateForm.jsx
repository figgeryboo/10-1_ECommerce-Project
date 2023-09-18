import React, { useState } from 'react';

const DonateForm = ({ onDonate }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		category: '',
		quantity: 1,
		size: '',
		zipCode: '',
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		onDonate(formData);

		setSubmitted(true);

		setFormData({
			name: '',
			email: '',
			category: '',
			quantity: '',
			size: '',
			zipCode: '',
		});
	};

	const handleDismiss = () => {
		setSubmitted(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Have Something to Donate?</h2>
			<h4>Fill out this form and let our team handle the rest!</h4>
			<label>
				Name:
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</label>
			<br />
			<label>
				Category:
				<select
					name="category"
					value={formData.category}
					onChange={handleChange}
					required
				>
					<option value="">Select a category</option>
					<option value="small">Men's</option>
					<option value="medium">Women's</option>
					<option value="large">Electronics</option>
					<option value="x-large">Jewelry</option>
					<option value="x-large">Other</option>
				</select>
			</label>
			<br />
			<label>
				Size:
				<select
					name="size"
					value={formData.size}
					onChange={handleChange}
					required
				>
					<option value="">Select a size</option>
					<option value="small">Small</option>
					<option value="medium">Medium</option>
					<option value="large">Large</option>
					<option value="x-large">X-Large</option>
					<option value="x-large">One Size</option>
				</select>
			</label>
			<br />
			<label>
				Quantity:
				<input
					type="number"
					name="quantity"
					value={formData.quantity}
					onChange={handleChange}
                    min="1"
					max="10"
					required
					
				/>
			</label>
			<br />
			<label>
				Zip Code:
				<input
					type="text"
					pattern="[0-9]*"
					name="zipCode"
					value={formData.zipCode}
					onChange={handleChange}
					required
				/>
			</label>
			<br />
            <br />
			<button type="submit">Donate</button>

			{submitted && (
				<div className="notification">
					<br />
					Thank you for your donation! One of our dedicated team members will
					contact you soon with drop-off details for a partner near you!
					<button onClick={handleDismiss}>x</button>
				</div>
			)}
		</form>
	);
};

export default DonateForm;
