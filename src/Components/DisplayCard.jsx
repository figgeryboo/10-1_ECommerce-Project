import React from 'react';
import './displaycard.css';
import { useState, useEffect } from 'react';

function DisplayCard({ onAddToCart, onRemoveFromCart, cart }) {
	const [allProducts, setAllProducts] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((data) => setAllProducts(data))
			.catch((error) => console.error('Error fetching data', error));
	}, []);

	const productsToRender = allProducts.map((eachProductObj) => {
		const isInCart = cart.some((item) => item.id === eachProductObj.id);
		return (
			<div className="card_container" key={eachProductObj.id}>
				<img
					src={eachProductObj.image}
					alt={`Image of Product: ${eachProductObj.title}`}
				/>

				<h4>
					<div className="productId" id={eachProductObj.id}>
						{`Product ID: ${eachProductObj.id}`}
					</div>
					<div className="productName">
						{`Product Name: ${eachProductObj.title}`}
					</div>
					<div className="productPrice">
						{`Product Price: ${eachProductObj.price}`}
					</div>
					<div className="productCategory">
						{`Product Category: ${eachProductObj.category}`}
					</div>
					<div className="Product Description">
						{`Product Description: ${eachProductObj.description}`}
					</div>
				</h4>
				<button onClick={() => onAddToCart(eachProductObj)} disabled={isInCart}>
					Add to Cart
				</button>

				<button
					onClick={() => onRemoveFromCart(eachProductObj)}
					disabled={!isInCart}
				>
					Remove from Cart
				</button>
			</div>
		);
	});
	return <div className="productCard">{productsToRender}</div>;
}

export default DisplayCard;
