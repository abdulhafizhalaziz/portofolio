/* Animasi muncul saat elemen masuk layar. Dipakai di banyak bagian. */
import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ children, delay = 0, y = 40, as = 'div', className, ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
