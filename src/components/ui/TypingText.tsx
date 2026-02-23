import { useTypingEffect } from '@/hooks/useTypingEffect';
import { motion } from 'framer-motion';

interface TypingTextProps {
  words: string[];
  className?: string;
}

const TypingText = ({ words, className = '' }: TypingTextProps) => {
  const text = useTypingEffect({
    words,
    typeSpeed: 100,
    deleteSpeed: 80,
    delayBetweenWords: 2000,
  });

  return (
    <span className={className}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};

export default TypingText;
