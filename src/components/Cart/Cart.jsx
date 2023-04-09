import React from 'react';
import "./cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0) {
        message = <p>Please Add Some Products</p>
    } else {
        message = <p>Thanks for giving your money</p>
    }

    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {message}
            {
                cart.map(tshirt => <p key={tshirt.id}>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt.id)}>X</button>
                </p>)
            }
            {/*logical && operator */}
            {
                cart.length === 2 && <p>Double Bonanza!</p>
            }
            {/*logical || operator */}
            {
                cart.length !== 3 || <p>Free Shipping</p>
            }
        </div>
    );
};

export default Cart;
