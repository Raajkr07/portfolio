import { IconInfinity } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const AnimatedInfinity = ({ size = 100, color, stroke  }) => {
  return (
    <motion.div
      // animate={{
      //   rotate: [0, 360],
      // }}
      transition={{
        duration: 3,
        ease: 'linear',
        repeat: Infinity,
      }}
      style={{ display: 'inline-block', width: size, height: size / 2 }}
    >
      <IconInfinity
        color={color}
        stroke={stroke}
        style={{ width: '100%', height: '100%' }}
      />
    </motion.div>
  );
};

export default AnimatedInfinity;
