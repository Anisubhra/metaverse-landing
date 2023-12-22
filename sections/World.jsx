'use client';

import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { cn } from '../lib/utils';
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
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5d6680] opacity-75 top-0 left-0"></span>
          <img src='people-01.png' alt="people" className='w-full h-full' />
        </div>
        <div className='absolute top-20 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5d6680] opacity-75 top-0 left-0"></span>
          <img src='people-02.png' alt="people" className='w-full h-full' />
        </div>
        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5d6680] opacity-75 top-0 left-0"></span>
          <img src='people-03.png' alt="people" className='w-full h-full' />
        </div>

        <div className='sm:block hidden absolute bottom-[184px] left-[250px] p-[8px] w-[196px] h-[150px] rounded-[12%] bg-[#5d6680] hover:animate-pulse'>
          <div className='relative'>
            <img src='9Z_2104.w030.n002.11A.p15 2.png' alt="world" className='w-full h-full rounded-[10%]' />
            <div className='absolute bottom-[15px] left-[15px] flex flex-col gap-[8px]'>
              <div className='flex flex-row items-center gap-[8px]'>
                <div className='relative flex flex-row item-center'>
                  <img src='people-01.png' alt="people" className='w-[24px] h-[24px]' />
                  <img src='people-02.png' alt="people" className='w-[24px] h-[24px]' />
                  <img src='people-03.png' alt="people" className='w-[24px] h-[24px]' />
                </div>
                <p className='text-white text-[12px] font-normal'>+ 264 has joined</p>
              </div>
              <h4 className='text-white text-[16px] font-bold'>The Upside Down</h4>
            </div>
          </div>
        </div>

        <div className='sm:block hidden absolute top-[40px] right-[250px] p-[8px] w-[196px] h-[150px] rounded-[12%] bg-[#5d6680] hover:animate-pulse'>
          <div className='relative'>
            <img src='1624 2.png' alt="world" className='w-full h-full rounded-[10%]' />
            <div className='absolute bottom-[15px] left-[15px] flex flex-col gap-[8px]'>
              <div className='flex flex-row items-center gap-[8px]'>
                <div className='relative flex flex-row item-center'>
                  <img src='people-01.png' alt="people" className='w-[24px] h-[24px]' />
                  <img src='people-02.png' alt="people" className='w-[24px] h-[24px]' />
                  <img src='people-03.png' alt="people" className='w-[24px] h-[24px]' />
                </div>
                <p className='text-white text-[12px] font-normal'>+ 264 has joined</p>
              </div>
              <h4 className='text-white text-[16px] font-bold'>Hawkins Labs</h4>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
