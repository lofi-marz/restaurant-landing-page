import clsx from 'clsx';
import { motion, useViewportScroll, Variants } from 'framer-motion';
import { useMediaQuery } from 'hooks/useMediaQuery';
import React, { useState } from 'react';
import { FaLeaf } from 'react-icons/fa';

function Logo() {
    return (
        <div className="flex w-fit items-center justify-center gap-2">
            <FaLeaf className="text-primary" />
            <div className="font-bold">chunkies!</div>
        </div>
    );
}

function NavLinks({ inverted }: { inverted: boolean }) {
    return (
        <motion.div
            className={clsx(
                'flex items-center gap-8 px-8 text-xl transition-all',
                inverted ? 'text-primary' : 'text-white'
            )}>
            <a href="#hero">home</a>
            <a>about us</a>
            <a>contact us</a>
            <a
                className={clsx(
                    'rounded-full px-5 py-2 transition-all',
                    inverted ? 'bg-primary text-white' : 'bg-white text-primary'
                )}>
                order
            </a>
        </motion.div>
    );
}

export function NavBar() {
    const lg = useMediaQuery('lg');
    const { scrollYProgress } = useViewportScroll();

    const [atPageStart, setAtPageStart] = useState(true);

    scrollYProgress.onChange((v) => setAtPageStart(v < 0.1));

    const containerVariants: Variants = {
        transparent: { backgroundColor: '#00000000' },
        solid: { backgroundColor: '#FFFFFF' },
    };

    return (
        <motion.nav
            className="sticky top-0 z-10 flex h-20 w-full items-center justify-between px-8 font-title text-3xl lg:px-24 lg:text-2xl "
            variants={containerVariants}
            animate={atPageStart ? 'transparent' : 'solid'}
            layout>
            <Logo />
            {lg && <NavLinks inverted={!atPageStart} />}
        </motion.nav>
    );
}
