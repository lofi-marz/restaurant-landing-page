import { Variants } from 'framer-motion';

export const fadeInVariants: Variants = {
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            duration: 2,
        },
    },

    hidden: {
        x: -10,
        opacity: 0,
    },
};
