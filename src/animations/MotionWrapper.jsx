import { motion } from "framer-motion";

export default function MotionWrapper({
  children,
  delay = 0,
  y = 45,
  x = 0,
  scale = 1,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        x,
        scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}