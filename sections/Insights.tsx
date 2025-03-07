'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components/CustomTexts';
import InsightCard from '../components/InsightCard';

const Insights = () => (
 <section className={`${styles.paddings} relative z-10`}>
 <motion.div
  variants={staggerContainer as any}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className={`${styles.innerWidth} mx-auto flex flex-col`}
 >
 <TypingText title="| Insight" textStyles="text-center" />
 <TitleText title={<>Insight sobre metaverso</>} textStyles="text-center"/>
 <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
 </motion.div>
 </section>

);
export default Insights;