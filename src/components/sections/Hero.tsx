import { FaArrowRight } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';
import plate from 'plate-3.png';
import { motion } from 'framer-motion';

function PlateImage() {
    return (
        <motion.div
            className="w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}>
            <Image src={plate} layout="responsive" />
        </motion.div>
    );
}

export function Hero() {
    return (
        <section className="section flex h-full min-h-screen w-full grow flex-col gap-4 font-text text-neutral-900 lg:grid lg:grid-cols-2 lg:gap-0">
            <div className="flex items-center justify-center drop-shadow-lg lg:order-last">
                <PlateImage />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-start">
                <div className="font-title text-4xl font-bold lg:text-5xl lg:leading-[3.5rem]">
                    Vegetarian Food, No Compromise!
                </div>
                <p className="w-3/4 text-lg text-neutral-600">
                    Delicious meat-free meals, with flavour to spare. Inspired
                    by Carribean cuisine, and bursting with flavour!
                </p>
                <button className="my-4 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-white">
                    <span>Order now</span>
                    <FaArrowRight />
                </button>
            </div>
        </section>
    );
}
