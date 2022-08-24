import type { NextPage } from 'next';
import React from 'react';
import { Hero } from 'components/sections';

const Home: NextPage = () => {
    return (
        <div className="z-10 flex h-screen w-full flex-col items-center justify-center text-neutral-900">
            <Hero />
        </div>
    );
};

export default Home;
