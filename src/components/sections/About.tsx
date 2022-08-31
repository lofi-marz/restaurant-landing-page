import React from 'react';
import Image from 'next/image';
import familyDinner from 'family-dinner.jpg';
import { motion } from 'framer-motion';

export function About() {
    return (
        <section className="section relative flex min-h-screen items-center justify-start gap-10 overflow-clip text-white">
            <motion.div
                className="absolute top-0 left-0 -z-10 h-full w-full brightness-[.25] saturate-[.75]"
                initial={{ y: 0 }}
                whileInView={{ y: 0 }}
                transition={{ ease: 'easeInOut', duration: 10 }}>
                <Image src={familyDinner} layout="fill" objectFit="cover" />
            </motion.div>
            <div className="w-full justify-self-start px-4 lg:w-1/2 lg:px-20">
                <h1 className="w-full pb-4 font-title text-4xl font-bold lg:text-6xl lg:leading-[4rem]">
                    Restauraunt Quality, <br /> Home Feel
                </h1>
                <p className="w-full font-text text-lg leading-6">
                    Growing up in a Carribean household, food is a shared
                    experience. We want to deliver you that same experience with
                    delicious food made with home recipes, passed down from
                    generation to generation. <br /> <br />
                    We serve great, meat-free food that vegetarians and
                    non-vegetarians will love. Whether you’re after a light
                    lunch, a not-so-light dinner, or a few drinks, we’ve got you
                    covered.
                </p>
            </div>
        </section>
    );
}
