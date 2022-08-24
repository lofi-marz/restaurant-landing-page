import type { NextPage } from 'next';
import React from 'react';
import { About, Hero, NavBar } from 'components/sections';

const Home: NextPage = () => {
    return (
        <div className="z-10 flex min-h-screen w-full flex-col items-center justify-center font-title text-neutral-900">
            <NavBar />
            <Hero />
            <About />
        </div>
    );
};

export default Home;
