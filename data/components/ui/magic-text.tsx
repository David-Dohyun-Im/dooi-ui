"use client" 

import * as React from "react"
 
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
 
export interface MagicTextProps {
  text: string;
}
 
interface WordProps {
  children: string;
  progress: any;
  range: number[];
}
 
const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mr-1">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
 
export const MagicText: React.FC<MagicTextProps> = ({ text }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  // Split by line breaks first, then by words
  const lines = text.split('\n');
  let wordIndex = 0;
  const totalWords = text.split(/\s+/).filter(word => word.trim()).length;

  return (
    <div ref={container} className="flex flex-col">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className={`flex flex-wrap ${line.trim() === '' ? 'h-24' : ''}`}>
          {line.split(/\s+/).filter(word => word.trim()).map((word, wordInLineIndex) => {
            const start = wordIndex / totalWords;
            const end = (wordIndex + 1) / totalWords;
            wordIndex++;

            return (
              <Word key={`${lineIndex}-${wordInLineIndex}`} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
      ))}
    </div>
  );
};