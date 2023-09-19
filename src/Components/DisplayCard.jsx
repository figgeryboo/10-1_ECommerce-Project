import React from 'react';
import './displaycard.css';
import { useState, useEffect } from 'react';
import { BsCart4 } from "react-icons/bs"
import { TbShoppingCartOff } from "react-icons/tb"

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
					className='img-src'
					src={eachProductObj.image}
					alt={`Image of Product: ${eachProductObj.title}`}

				/>

				<h4>
					<div className="productName">
						{`${eachProductObj.title}`}
					</div>
					</h4>
					<div className="productPrice">
						{`Product Price: ${eachProductObj.price}`}
			
					</div>
					<br/>
					<div className="Product Description">
						{`Product Description: ${eachProductObj.description}`}
					</div>
					
					<div className="productCategory">
						{`Product Category: ${eachProductObj.category}`}
					</div>
				
					
				<button
					className='add-bttn'
					onClick={() => onAddToCart(eachProductObj)}
					disabled={isInCart}>
					Add to Cart <BsCart4 />
				</button>

				<button
					className='remove-bttn'
					onClick={() => onRemoveFromCart(eachProductObj)}
					disabled={!isInCart}
				>
					Remove from Cart <TbShoppingCartOff />
				</button>
			</div>
		);
	});
	return <div className="productCard">{productsToRender}</div>;
}

export default DisplayCard;
