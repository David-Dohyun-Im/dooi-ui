import { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

// NumberTicker 컴포넌트 구현
interface NumberTickerProps {
  value: number;
  duration?: number;
  className?: string;
}

export const NumberTicker = ({ value, duration = 1.5, className = "" }: NumberTickerProps) => {
  const springValue = useSpring(0, { 
    duration: duration * 1000,
    damping: 20,
    stiffness: 300
  });
  const display = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    springValue.set(value);
  }, [springValue, value]);

  return <motion.span className={className}>{display}</motion.span>;
};

export function NumberTickerDemo() {
  return (
    <NumberTicker
      value={100}
      className="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
    />
  )
}
