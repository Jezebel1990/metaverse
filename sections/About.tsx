'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
<section className={`${styles.paddings} relative z-10`}>
<div className="gradient-02 z-0" />
<motion.div
variants={staggerContainer as any}
initial="hidden"
whileInView="show"
viewport={{ once: false, amount: 0.25}}
className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
>
<TypingText title="| Sobre Metaversos" textStyles="text-center" />

<motion.p
variants={fadeIn('up', 'tween', 0.2, 1)}
className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
O <span className="font-extrabold text-white"> Metaverso </span> é uma novidade no futuro, onde você pode curtir o mundo virtual sentindo 
que é realmente real, você pode sentir o que sente neste mundo metaverso, porque esse é 
realmente o <span className="font-extrabold text-white"> metaverso sideral </span>
de hoje, usando apenas dispositivos <span className="font-extrabold text-white"> VR </span>
você pode explorar facilmente o mundo do metaverso que deseja e transformar seus sonhos em realidade. Vamos 
<span className="font-extrabold text-white"> explorar </span>
o metaverso sideral rolando para baixo!    
</motion.p>

<motion.img
 variants={fadeIn('up', 'tween', 0.3, 1)}
 src="/arrow-down.svg"
 alt="arrow down"
 className="w-[18px] h-[28px] object-contain mt-[28px]"
/>
</motion.div>
</section>
);

export default About;