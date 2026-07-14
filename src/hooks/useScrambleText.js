import { useState, useEffect, useCallback, useRef } from 'react';

const BINARY = '01';

export function useScrambleText({
  text,
  scrambleSpeed = 50,
  delay = 0,
  duration = 1400,
  onComplete,
}) {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const scramble = useCallback(() => {
    if (!text) return;

    setIsScrambling(true);
    const textLength = text.length;
    let frame = 0;
    const totalFrames = Math.floor(duration / scrambleSpeed);

    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const resolvedCount = Math.floor(textLength * Math.min(progress, 1));

        let result = '';
        for (let i = 0; i < textLength; i++) {
          if (i < resolvedCount) {
            result += text[i];
          } else {
            // Use only binary characters
            const char = BINARY[Math.floor(Math.random() * BINARY.length)];
            // Near the end, show correct char more often
            if (progress > 0.75 && Math.random() > 0.6) {
              result += text[i];
            } else {
              result += char;
            }
          }
        }

        setDisplayText(result);

        if (frame >= totalFrames) {
          clearInterval(intervalRef.current);
          setDisplayText(text);
          setIsScrambling(false);
          if (onComplete) onComplete();
        }
      }, scrambleSpeed);
    }, delay);
  }, [text, scrambleSpeed, delay, duration, onComplete]);

  useEffect(() => {
    scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scramble]);

  return { displayText, isScrambling, rescramble: scramble };
}