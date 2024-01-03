import { useEffect, useMemo, useRef, useState } from 'react';

export default function useTypingEffect({ words, fps = 8 }: { words: string[]; fps?: number }) {
  const blankWords = useMemo(() => words.map((el) => el + '  '), [words]);
  const [displayText, setDisplayText] = useState('');
  const currentWordIdx = useRef(0);

  useEffect(() => {
    let isErasing = false;
    let displayIdx = 0;
    let start = 0;
    let lastTimestamp = 0;
    let currentWord = blankWords[currentWordIdx.current];

    const typingText = (timestamp: number) => {
      if (start === 0 && lastTimestamp === 0) {
        start = window.performance.now();
        lastTimestamp = window.performance.now();
      }

      const interval = 1000 / fps; // fps 디폴트 8 의미 = 초당 8개의 프레임 렌더링 : 125 밀리세컨드 간격으로 프레임생성
      const elapse = timestamp - lastTimestamp; // 경과시간

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
  }, [blankWords, currentWordIdx, fps]);

  return displayText;
}
