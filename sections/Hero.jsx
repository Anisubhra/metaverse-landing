'use client';

import styles from "../styles";
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant } from "../utils/motion";
import { cn } from "../lib/utils";
import { socialsExtra } from "../constants";


const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={cn(styles.innerWidth, 'mx-auto flex flex-col')}
    >
      <div className="flex justify-center items-center flex-col relative">
        <motion.h1
          variants={textVariant(1.1)}
          className={cn(styles.heroHeading,'z-10')}
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center z-10"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Nes</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <motion.div
          variants={fadeIn('up', 'tween', 0.5, 1)}
          className="absolute flex flex-col gap-[30px] right-[70px] -top-[300px] z-20">
          {
            socialsExtra.map((social) => (
              <img
                src={social.url}
                alt={social.name}
                key={social.name}
                title={social.name}
                className="sm:block hidden h-[25px] w-[25px] cursor-pointer"
              />
            ))
          }
        </motion.div>

        <img src='/cover.png' alt='cover' className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative' />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] -pr-[40px] relative z-10">
            <img src="/stamp.png" alt="stamp" className="sm:w-[155px] w-[100px] sm:h[155px] h-[100px] object-contain" />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
