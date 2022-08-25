import React from 'react';
import Image from 'next/image';
import familyDinner from 'family-dinner.jpg';

export function About() {
    return (
        <section className="section flex h-screen items-center justify-center gap-10">
            <div className="w-[35%]">
                <Image
                    className="rounded shadow"
                    src={familyDinner}
                    layout="responsive"
                />
            </div>
            <div className="w-3/5">
                <h1 className="pb-4 font-title text-4xl font-bold">
                    Restauraunt Quality, Home Feel
                </h1>
                <p className="text-lg leading-6 text-neutral-600">
                    Growing up in a Carribean household, food is a shared
                    experience. We want to deliver you that same experience with
                    delicious food made with home recipes, passed down from
                    generation to generation. <br />
                    We serve great, meat-free food that vegetarians and
                    non-vegetarians will love. Whether you’re after a light
                    lunch, a not-so-light dinner, or a few drinks, we’ve got you
                    covered.
                </p>
            </div>
        </section>
    );
}
