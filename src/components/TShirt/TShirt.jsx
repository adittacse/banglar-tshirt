import React from 'react';
import "./TShirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
    const {id, picture, name, price, gender} = tshirt;
    return (
        <div className="t-shirt">
            <img src={picture} alt="tshirt"/>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Gender: {gender}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;
