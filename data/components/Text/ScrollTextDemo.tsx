import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollTextDemo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // 스크롤 위치에 따라 투명도 계산 (0.3에서 1.0으로)
      const maxScroll = 800; // 최대 스크롤 거리
      const newOpacity = Math.min(0.3 + (currentScrollY / maxScroll) * 0.7, 1.0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sentences = [
    "Scroll to see the magic happen. Watch as text transforms from gray to white. Experience the power of interactive design.",
    "Discover the beauty of smooth transitions. Feel the rhythm of scrolling animations. Create memorable user experiences.",
    "Transform your ideas into reality. Build with confidence and style. Make every interaction count."
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-20 px-4" id="scroll-text-demo">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          className="text-left text-[36px] font-[Geist] leading-[50.4px] tracking-normal"
          style={{ 
            color: `rgba(255, 255, 255, ${opacity})`,
            transition: 'color 0.1s ease-out'
          }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {sentences.map((sentence, index) => (
              <motion.div
                key={index}
                variants={child}
                className="mb-12"
              >
              {sentence}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { ScrollTextDemo };
