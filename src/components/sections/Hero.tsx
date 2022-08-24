import { FaArrowRight, FaLeaf } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';
import plate from 'plate-3.png';

export function Hero() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center text-neutral-900">
            <nav className="flex h-20 w-full items-center justify-between px-24 font-title text-2xl font-bold">
                <div className="flex w-fit items-center justify-center gap-2">
                    <FaLeaf className="text-green-900" />
                    <div className="font-bold">chunkies!</div>
                </div>
                <div className="flex gap-8 px-8 text-xl text-neutral-900">
                    <a>home</a>
                    <a>about us</a>
                    <a>order</a>
                    <a>bookings</a>
                    <a>contact us</a>
                </div>
            </nav>
            <section className="grid h-full w-full grid-cols-2 px-10 font-title">
                <div className="flex flex-col items-start justify-center gap-4 pl-14">
                    <div className="text-5xl font-bold leading-[60px]">
                        Vegetarian Food, <br /> No Compromise!
                    </div>
                    <p className="w-2/3 text-lg text-neutral-600">
                        Delicious meat-free meals, with flavour to spare.
                        Inspired by Carribean cuisine, and bursting with
                        flavour!
                    </p>
                    <button className="my-4 flex items-center justify-center gap-2 rounded-full bg-green-900 px-6 py-4 text-white">
                        <span>Order now</span>
                        <FaArrowRight />
                    </button>
                </div>
                <div className="flex items-center justify-center drop-shadow-lg">
                    <div className="w-full max-w-lg">
                        <Image src={plate} layout="responsive" />
                    </div>
                </div>
            </section>
        </div>
    );
}
