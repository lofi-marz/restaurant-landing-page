import React from 'react';
import Head from 'next/head';
import { WithChildrenProps } from 'types';
import blob from 'blob.webp';
import Image from 'next/image';

type LayoutProps = WithChildrenProps;

export function Layout({ children }: LayoutProps) {
    return (
        <div className="h-full min-h-screen w-full">
            <div className="flex flex-col items-center justify-center">
                <Head>
                    <title>hi</title>
                    <meta name="description" content="" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="flex min-h-screen w-full grow flex-col bg-white">
                    <div className="absolute top-0 right-0 w-1/2">
                        <Image src={blob} layout="responsive" />
                    </div>
                    {children}
                </main>
            </div>
        </div>
    );
}
