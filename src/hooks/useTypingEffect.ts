import { useState, useEffect } from 'react';

interface UseTypingEffectProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export const useTypingEffect = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 80,
  delayBetweenWords = 2000,
}: UseTypingEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < word.length) {
            setCurrentText(word.substring(0, currentText.length + 1));
          } else {
            // Word complete, wait then start deleting
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(word.substring(0, currentText.length - 1));
          } else {
            // Move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return currentText;
};
