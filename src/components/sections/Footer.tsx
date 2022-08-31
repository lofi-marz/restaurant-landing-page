import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export function Footer() {
    return (
        <section className="section flex w-full flex-row items-center justify-between bg-primary py-6 px-6 text-xl text-white md:px-20">
            <div className="text-base">© 2022 chunkies!</div>
            <div className="flex flex-row gap-4">
                <FaFacebook />
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
            </div>
        </section>
    );
}
