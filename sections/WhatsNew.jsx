'use client';

import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import styles from '../styles';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={cn(styles.paddings, 'relative z-10')}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={cn(styles.innerWidth, 'mx-auto flex lg:flex-row flex-col gap-8')}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[.75] flex justify-center flex-col'
      >
        <TypingText title="| Whats New?" />
        <TitleText title={<>What's new about HorizonX?</>} textStyles="leading-[75px] max-w-[570px]" />
        <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
          {
            newFeatures.map((feature) => (
              <NewFeatures
                key={feature.title}
                {...feature}
              />
            ))
          }
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={cn('flex-1', styles.flexCenter)}
      >
        <img src='/whats-new.png' alt="get_started" className='h-[90%] w-[90%] object-contain' />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
