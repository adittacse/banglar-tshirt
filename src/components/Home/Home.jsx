import React from 'react';
import {useLoaderData} from "react-router-dom";
import TShirt from "../TShirt/TShirt.jsx";
import Cart from "../Cart/Cart.jsx";
import "./Home.css";

const Home = () => {
    const tshirts = useLoaderData();

    return (
        <div className="home-container">
            <div className="t-shirts-container">
                {
                    tshirts.map(tshirt => <TShirt key={tshirt.id} tshirt={tshirt}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;
