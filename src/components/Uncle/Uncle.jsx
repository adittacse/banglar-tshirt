import React, {useContext} from 'react';
import Cousin from "../Cousin/Cousin.jsx";
import {MoneyContext} from "../Grandpa/Grandpa.jsx";

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2>Uncle</h2>
            <p><small>Grandpa Money: {money}</small></p>
            <button onClick={() => setMoney(money+ 1000)}>Send 1000 tk</button>
            <section className="flex">
                <Cousin>Nabil</Cousin>
                <Cousin>Misti</Cousin>
            </section>
        </div>
    );
};

export default Uncle;
