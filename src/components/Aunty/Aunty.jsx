import React from 'react';
import Cousin from "../Cousin/Cousin.jsx";

const Aunty = ({ ring }) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring={ring}>Niloy</Cousin>
            </section>
        </div>
    );
};

export default Aunty;
