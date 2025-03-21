'use client';

import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={cn(styles.paddings, 'relative z-10')}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={cn(styles.innerWidth, 'mx-auto flex lg:flex-row flex-col gap-8')}
    >
      <motion.div
        variants={planetVariants('left')}
        className={cn('flex-1', styles.flexCenter)}
      >
        <img src='/get-started.png' alt="get_started" className='h-[90%] w-[90%] object-contain' />
      </motion.div>
     
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex-[.75] flex justify-center flex-col'
      >
        <TypingText title="| How HorizonX Works" />
        <TitleText title={<>Get started with just a few clicks</>} textStyles="leading-[75px] max-w-[471px]" />
        <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
          {
            startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))
          }
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
