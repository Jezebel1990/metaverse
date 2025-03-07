'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { startingFeatures } from '../constants';
import { TitleText, TypingText } from '../components/CustomTexts';
import StartSteps  from '../components/StartSteps';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';


const GetStarted = () => (
<section className={`${styles.paddings} relative z-10`}>
<motion.div
   variants={staggerContainer as any}
   initial="hidden"
   whileInView="show"
   viewport={{ once: false, amount: 0.25}}
   className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
>
<motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      > 
<img 
  src="/get-started.png"
  alt="get-started"
  className="w-[75%] h-[75%] object-contain"
/>
</motion.div>
<motion.div
 variants={fadeIn('left', 'tween',0.2, 1)}
 className="flex-[0.75] flex justify-center flex-col"
>
 <TypingText title="| Como Funciona o Metaverso" />   
<TitleText title={<>Comece com alguns cliques</>} />
<div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">

  {startingFeatures.map((feature, index) => (
    <StartSteps 
    key={feature}
    number={index + 1}
    text={feature}
    />
  ))}
</div>
</motion.div>
</motion.div>
</section>
);
export default GetStarted;

