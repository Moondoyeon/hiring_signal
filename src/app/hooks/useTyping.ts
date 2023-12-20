import { useEffect, useRef, useState } from 'react';

export default function useTyping(words: string[]) {
  const processedWords = words.map((word) => word + ' ');

  const [typing, setTyping] = useState('');
  const wordIdx = useRef(0);
  const currentTypeIdx = useRef(0);
  const flag = useRef(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let target = processedWords[wordIdx.current];

    intervalId = setInterval(() => {
      setTyping((prev) => {
        if (flag.current === 0 && currentTypeIdx.current < target.length) {
          if (target[currentTypeIdx.current]) {
            prev = prev += target[currentTypeIdx.current++];
          }
        }

        if (currentTypeIdx.current === target.length) {
          flag.current = 1;
          currentTypeIdx.current--;
        }

        if (
          flag.current === 1 &&
          currentTypeIdx.current >= 0 &&
          currentTypeIdx.current < target.length
        ) {
          prev = target.slice(0, currentTypeIdx.current--);
        }

        if (flag.current === 1 && currentTypeIdx.current < 0) {
          flag.current = 2;
        }

        if (flag.current === 2) {
          prev = '';
          wordIdx.current++;
          if (wordIdx.current >= processedWords.length) wordIdx.current = 0;
          target = processedWords[wordIdx.current];
          flag.current = 0;
          currentTypeIdx.current = 0;
        }

        return prev;
      });
    }, 250);

    return () => clearInterval(intervalId);
  }, [processedWords]);

  return typing;
}
