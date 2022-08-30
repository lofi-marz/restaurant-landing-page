import type { NextPage } from 'next';
import React from 'react';
import {
    About,
    Hero,
    Icons,
    NavBar,
    OrderOrReserve,
} from 'components/sections';

const Home: NextPage = () => {
    return (
        <div className="z-10 flex min-h-screen w-full flex-col items-center justify-center font-text text-neutral-900">
            <NavBar />
            <Hero />
            <Icons />
            <About />
            <OrderOrReserve />
        </div>
    );
};

export default Home;
