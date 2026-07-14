import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrambleText } from '../hooks/useScrambleText';

const ScrambleText = ({
  text,
  as = 'h1',
  className = '',
  scrambleSpeed = 40,
  delay = 0,
  duration = 1200,
  perspective = true,
  hoverEffect = true,
  ...props
}) => {
  const { displayText, rescramble } = useScrambleText({
    text,
    scrambleSpeed,
    delay,
    duration,
  });

  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!hoverEffect || !ref.current) return;

    const handleMouseMove = (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Map mouse position to rotation (-3 to 3 degrees)
      const rotY = ((mouseX - centerX) / rect.width) * 3;
      const rotX = -((mouseY - centerY) / rect.height) * 3;

      setRotateX(rotX);
      setRotateY(rotY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setRotateX(0);
      setRotateY(0);
    };

    const el = ref.current;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hoverEffect]);

  const style = perspective
    ? {
        perspective: '800px',
        transformStyle: 'preserve-3d',
      }
    : {};

  const textStyle = {
    display: 'inline-block',
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    transition: isHovered
      ? 'transform 0.1s ease-out'
      : 'transform 0.5s ease-out',
    transformStyle: 'preserve-3d',
  };

  const handleClick = () => {
    rescramble();
  };

  const Tag = motion[as] || motion.h1;

  return (
    <div ref={ref} style={style} className="inline-block">
      <Tag
        className={className}
        style={textStyle}
        onClick={handleClick}
        title="Click to rescramble"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        {...props}
      >
        {displayText}
      </Tag>
    </div>
  );
};

export default ScrambleText;