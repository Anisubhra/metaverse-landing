'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { cn } from '../utils/utils';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';


const World = () => (
  <section className={cn(styles.paddings, 'relative z-10')}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={cn(styles.innerWidth, 'mx-auto flex flex-col')}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles=
        "text-center max-w-[962px] mx-auto" />

      <motion.div variants={fadeIn('up', 'tween', .3, 1)} className='relative mt-[68px] flex w-full h-[550px]'>
        <img src="/map.png" alt="map" className='w-full h-full object-cover' />

        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-01.png' alt="people" className='w-full h-full' />
        </div>
        <div className='absolute top-20 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-02.png' alt="people" className='w-full h-full' />
        </div>
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-03.png' alt="people" className='w-full h-full' />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
