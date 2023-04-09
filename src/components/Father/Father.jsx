import React from 'react';
import Myself from "../Myself/Myself.jsx";
import Sister from "../Sister/Sister.jsx";
import Brother from "../Brother/Brother.jsx";

const Father = ({ ring }) => {
    return (
        <div>
            <h2>Father</h2>
            <section className="flex">
                <Myself ring={ring}></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;
