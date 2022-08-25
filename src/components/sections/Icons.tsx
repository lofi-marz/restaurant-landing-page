import { FaLeaf, FaSun } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';

export function Icons() {
    return (
        <section className="section flex w-full flex-col items-center justify-center gap-12 py-10 md:flex-row md:items-baseline md:gap-24">
            <div className="flex flex-col items-center justify-center gap-2">
                <FaLeaf className="mb-6 text-8xl text-primary" />
                <div className="font-title text-4xl font-bold">Meat-Free</div>
                <div className="text-lg text-neutral-600">
                    No meat, all the flavour!
                </div>
            </div>
            <div className="flex w-48 flex-col items-center justify-center gap-2 text-center ">
                <FaSun className="mb-6 text-8xl text-primary" />
                <div className="font-title text-4xl font-bold">
                    Caribbean Inspired
                </div>
                <div className="text-lg text-neutral-600">
                    Flavours straight from St Lucia
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <IoFastFood className="mb-6 text-8xl text-primary" />
                <div className="font-title text-4xl font-bold">
                    Freshly Made
                </div>
                <div className="text-lg text-neutral-600">
                    Not a freezer in sight
                </div>
            </div>
        </section>
    );
}
