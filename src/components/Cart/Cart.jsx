import React from 'react';
import "./cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {

    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {
                cart.map(tshirt => <p key={tshirt.id}>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt.id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;
