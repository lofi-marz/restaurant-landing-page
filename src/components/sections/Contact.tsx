import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/all';
import { FaLeaf } from 'react-icons/fa';

export function Contact() {
    return (
        <section className="section flex w-full flex-col-reverse items-center justify-center py-12  md:flex-row  md:justify-between">
            <div className="flex flex-col items-center justify-center gap-10 text-center md:flex-row md:text-start">
                <div>
                    <div className="text-xl font-bold">Contact Us</div>
                    <div>
                        <div>07542 819624</div>
                        <div>email@mail.com</div>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-bold">Address</div>
                    <div>
                        <div>64 Zoo Lane</div>
                        <div>Nottingham</div>
                    </div>
                </div>
                <div>
                    <div className="text-xl font-bold">Opening Hours</div>
                    <div>
                        <div>Mon - Fri: 8am - 8pm</div>
                        <div>Sat - Sun: 9am - 5pm</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row p-10 text-6xl font-bold">
                <FaLeaf className="text-primary" />!
            </div>
        </section>
    );
}
