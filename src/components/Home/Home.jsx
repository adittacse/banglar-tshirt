import React, {useState} from 'react';
import {useLoaderData} from "react-router-dom";
import TShirt from "../TShirt/TShirt.jsx";
import Cart from "../Cart/Cart.jsx";
import "./Home.css";
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const notify = () => {
        toast.error("Already Added in Cart");
    };

    const handleAddToCart = (tshirt) => {
        const exists = cart.find(ts => ts.id === tshirt.id);
        if (exists) {
            notify();
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(tshirt => tshirt.id !== id);
        setCart(remaining);
    }

    return (
        <div className="home-container">
            <div className="t-shirts-container">
                {
                    tshirts.map(tshirt => <TShirt key={tshirt.id}
                                                  tshirt={tshirt}
                                                  handleAddToCart={handleAddToCart}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;
