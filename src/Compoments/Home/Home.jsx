import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData();
    console.log(tShirts);
    return (
        <div>
            <h1>T-Shirts {tShirts.length}</h1>
        </div>
    );
};

export default Home;