import React from 'react';
import { FaArrowRight, FaMotorcycle } from 'react-icons/fa';

export function OrderOrReserve() {
    const today = new Date().toISOString().split('T')[0];
    return (
        <section className="section relative flex grid h-screen w-full grid-rows-2 p-0 lg:h-auto lg:grid-cols-2 lg:grid-rows-1">
            <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-5 lg:p-20">
                <FaMotorcycle className="text-9xl text-primary" />
                <div className="flex w-full flex-col items-center justify-center gap-2">
                    <div className="text-2xl">Order Online</div>
                    <div className="text-center text-4xl font-bold">
                        Our Food Straight <br /> To Your Home
                    </div>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-white">
                    <span>Order now</span>
                    <FaArrowRight />
                </button>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-primary px-5  lg:p-20">
                <div className="flex w-full flex-col items-center justify-center gap-2 text-white">
                    <div className="text-2xl font-light">Reserve</div>
                    <div className="text-center text-4xl font-bold">
                        Come And Sit With Us!
                    </div>
                </div>
                <form className="flex flex-col gap-4">
                    <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value={today}
                        min="2020-01-01"
                        max="2022-10-10"
                        className="border-2 border-white bg-primary text-white"
                    />
                    <select className="border-2 border-white bg-primary text-white">
                        <option>16:30</option>
                        <option>16:45</option>
                        <option>17:00</option>
                    </select>
                    <select className="border-2 border-white bg-primary text-white">
                        {[...new Array(10)].map((_, i) => (
                            <option key={i}>{`${i + 1} ${
                                i ? 'people' : 'person'
                            }`}</option>
                        ))}
                    </select>
                </form>
            </div>
        </section>
    );
}
