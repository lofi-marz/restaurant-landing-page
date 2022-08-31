import { FaArrowRight } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';
import plate from 'plate-3.png';
import { motion, Variant, Variants } from 'framer-motion';
import { fadeInVariants } from '../../animations';

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
            <motion.div
                className="flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-start"
                initial="hidden"
                whileInView="visible"
                variants={fadeInVariants}>
                <motion.div
                    className="font-title text-4xl font-bold lg:text-5xl lg:leading-[3.5rem]"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}>
                    Vegetarian Food, No Compromise!
                </motion.div>
                <motion.p
                    className="w-3/4 text-lg text-neutral-600"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}>
                    Delicious meat-free meals, with flavour to spare. Inspired
                    by Carribean cuisine, and bursting with flavour!
                </motion.p>
                <motion.button
                    className="my-4 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-white"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInVariants}>
                    <span>Order now</span>
                    <FaArrowRight />
                </motion.button>
            </motion.div>
        </section>
    );
}
