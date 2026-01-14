import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

interface SuccessAnimationProps {
  message?: string;
  onComplete?: () => void;
}

export function SuccessAnimation({ message = 'Success!', onComplete }: SuccessAnimationProps) {
  React.useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(onComplete, 2000);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
        className="bg-card rounded-2xl p-8 shadow-2xl max-w-sm mx-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
          className="w-20 h-20 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center"
        >
          <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-heading font-bold text-center mb-2"
        >
          {message}
        </motion.h3>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-accent to-primary rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
