import React from 'react';
import Father from "../Father/Father.jsx";
import Uncle from "../Uncle/Uncle.jsx";
import Aunty from "../Aunty/Aunty.jsx";
import "./Granda.css";

const Grandpa = () => {
    const ring = "Diamond";

    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <section className="flex">
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty ring={ring}></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;
