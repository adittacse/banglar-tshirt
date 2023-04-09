import React from 'react';
import Cousin from "../Cousin/Cousin.jsx";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin>Nabil</Cousin>
                <Cousin>Misti</Cousin>
            </section>
        </div>
    );
};

export default Uncle;
