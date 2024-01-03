import { useEffect, useMemo, useRef, useState } from 'react';

export default function useTypingEffect(words: string[]) {
  const blankWords = useMemo(() => words.map((el) => el + '  '), [words]);
  const [displayText, setDisplayText] = useState('');
  const currentWordIdx = useRef(0);

  useEffect(() => {
    let isErasing = false;
    let displayIdx = 0;
    let start = 0;
    let currentWord = blankWords[currentWordIdx.current];
    let lastTimestamp = 0;

    const typingText = (timestamp: number) => {
      if (start === 0 && lastTimestamp === 0) {
        start = window.performance.now();
        lastTimestamp = window.performance.now();
      }

      const interval = 2000 / 10;
      const elapse = timestamp - lastTimestamp;

      // console.log('timestamp', timestamp);
      // console.log('elapse', elapse);
      // console.log('lastTimestamp', lastTimestamp);

      if (elapse >= interval) {
        lastTimestamp = timestamp - (elapse % interval);

        // 단어 하나 끝까지 타이핑한경우
        if (!isErasing && currentWord.length === displayIdx) {
          isErasing = true;
        }
        // 단어 하나 끝까지 지운경우
        if (isErasing && displayIdx === 0) {
          currentWordIdx.current++;
          if (currentWordIdx.current >= blankWords.length) currentWordIdx.current = 0;
          currentWord = blankWords[currentWordIdx.current];
          isErasing = false;
          displayIdx = 0;
        }

        // 타이핑 지우기
        if (isErasing) {
          setDisplayText(currentWord.slice(0, displayIdx--));
          requestAnimationFrame(typingText);
        } else {
          setDisplayText(currentWord.slice(0, displayIdx++));
          requestAnimationFrame(typingText);
        }
      } else {
        requestAnimationFrame(typingText);
      }
    };

    const animateId = requestAnimationFrame(typingText);
    return () => cancelAnimationFrame(animateId);
  }, [blankWords, currentWordIdx]);

  return displayText;
}
