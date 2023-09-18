import React from 'react';

function Cart({ cart, removeFromCart }) {
    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price;
        });
        return total.toFixed(2);
    };

    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    <span>{item.title}</span>
                    <button onClick={() => removeFromCart(item)}>x</button>
                </div>
            ))}
            <div>
                Total: ${calculateTotal()}
            </div>
        </div>
    );
}

export default Cart;
