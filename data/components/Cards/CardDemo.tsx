'use client'
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface CardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

const CardDemo = () => {
  const cardData: CardData[] = [
    {
      icon: (
        <svg width="100" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1"/>
          <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1"/>
          <circle cx="12" cy="12" r="2" fill="white"/>
        </svg>
      ),
      title: "AI Automation",
      description: "Automate routine tasks like lead handling and customer replies to let your team focus on what matters most.",
      buttonText: "Get started"
    },
    {
      icon: (
        <svg width="100" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="6" height="6" stroke="white" strokeWidth="1"/>
          <rect x="9" y="3" width="6" height="6" stroke="white" strokeWidth="1"/>
          <rect x="15" y="3" width="6" height="6" stroke="white" strokeWidth="1"/>
          <rect x="3" y="9" width="6" height="6" stroke="white" strokeWidth="1"/>
          <rect x="9" y="9" width="6" height="6" stroke="white" strokeWidth="1"/>
          <rect x="15" y="9" width="6" height="6" stroke="white" strokeWidth="1"/>
        </svg>
      ),
      title: "Data Insights",
      description: "Discover trends, predict user behavior, and segment your audience with precision to make smarter, data-backed business decisions.",
      buttonText: "Get started"
    },
    {
      icon: (
        <svg width="100" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="white" strokeWidth="1"/>
          <polygon points="12,6 18,9.5 18,14.5 12,18 6,14.5 6,9.5" stroke="white" strokeWidth="1"/>
          <polygon points="12,10 15,12 15,14 12,16 9,14 9,12" stroke="white" strokeWidth="1"/>
        </svg>
      ),
      title: "Adaptive AI",
      description: "We build AI systems that grow with your business, adapt to your data, and keep you ahead in a changing market.",
      buttonText: "Get started"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center py-20 px-4">
      {/* Main Title */}
      <motion.h1 
        className="text-white text-center font-medium"
        style={{
          fontSize: '48px',
          fontFamily: 'Geist, sans-serif',
          lineHeight: '1.2',
          letterSpacing: '-0.02em',
          marginBottom: '128px'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The core of smarter innovation
      </motion.h1>

      {/* Cards Container */}
      <div className="flex gap-5 justify-center items-start max-w-7xl">
        {cardData.map((card, index) => (
          <GradientCardItem 
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

interface GradientCardItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  delay: number;
}

const GradientCardItem = ({ icon, title, description, buttonText, delay }: GradientCardItemProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      // Calculate mouse position relative to card center
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setMousePosition({ x, y });

      // Calculate rotation (limited range for subtle effect)
      const rotateX = -(y / rect.height) * 5; // Max 5 degrees rotation
      const rotateY = (x / rect.width) * 5; // Max 5 degrees rotation

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  // Reset rotation when not hovering
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-[32px] overflow-hidden"
      style={{
        width: "420px",
        height: "386px",
        transformStyle: "preserve-3d",
        backgroundColor: "#0e131f",
        boxShadow: "0 -10px 100px 10px rgba(78, 99, 255, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.5)",
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
        opacity: 1
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        opacity: { duration: 0.8, delay }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle glass reflection overlay */}
      <motion.div
        className="absolute inset-0 z-35 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
          rotateX: -rotation.x * 0.2,
          rotateY: -rotation.y * 0.2,
          z: 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Dark background with black gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #000000 70%)",
        }}
        animate={{
          z: -1
        }}
      />

      {/* Noise texture overlay */}
      <motion.div
        className="absolute inset-0 opacity-30 mix-blend-overlay z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        animate={{
          z: -0.5
        }}
      />

      {/* Gray glow effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
        style={{
          background: `
            radial-gradient(ellipse at bottom right, rgba(156, 163, 175, 0.7) -10%, rgba(75, 85, 99, 0) 70%),
            radial-gradient(ellipse at bottom left, rgba(107, 114, 128, 0.7) -10%, rgba(75, 85, 99, 0) 70%)
          `,
          filter: "blur(40px)",
        }}
        animate={{
          opacity: isHovered ? 0.9 : 0.8,
          y: isHovered ? rotation.x * 0.5 : 0,
          z: 0
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Central gray glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
        style={{
          background: `
            radial-gradient(circle at bottom center, rgba(107, 114, 128, 0.7) -20%, rgba(75, 85, 99, 0) 60%)
          `,
          filter: "blur(45px)",
        }}
        animate={{
          opacity: isHovered ? 0.85 : 0.75,
          y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
          z: 0
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Enhanced bottom border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
        style={{
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)",
        }}
        animate={{
          boxShadow: isHovered
            ? "0 0 20px 4px rgba(156, 163, 175, 0.9), 0 0 30px 6px rgba(107, 114, 128, 0.7), 0 0 40px 8px rgba(75, 85, 99, 0.5)"
            : "0 0 15px 3px rgba(156, 163, 175, 0.8), 0 0 25px 5px rgba(107, 114, 128, 0.6), 0 0 35px 7px rgba(75, 85, 99, 0.4)",
          opacity: isHovered ? 1 : 0.9,
          z: 0.5
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      {/* Card content */}
      <motion.div
        className="relative flex flex-col h-full p-8 z-40"
        animate={{
          z: 2
        }}
      >
        {/* Icon */}
        <motion.div
          className="flex items-center justify-start mb-6"
          initial={{ filter: "blur(3px)", opacity: 0.7 }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            z: isHovered ? 10 : 5,
            y: isHovered ? -2 : 0,
            rotateX: isHovered ? -rotation.x * 0.5 : 0,
            rotateY: isHovered ? -rotation.y * 0.5 : 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          {icon}
        </motion.div>

        {/* Content */}
        <motion.div
          className="mb-auto"
          animate={{
            z: isHovered ? 5 : 2,
            rotateX: isHovered ? -rotation.x * 0.3 : 0,
            rotateY: isHovered ? -rotation.y * 0.3 : 0
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
        >
          <motion.h3
            className="text-white mb-3 font-medium"
            style={{
              fontSize: '18px',
              fontFamily: 'Geist, sans-serif',
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              textShadow: isHovered ? "0 2px 4px rgba(0,0,0,0.2)" : "none",
              filter: "blur(0px)",
              opacity: 1,
              transition: { duration: 1.2, delay: 0.2 }
            }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-gray-300 mb-6"
            style={{
              fontSize: '16px',
              fontFamily: 'Geist, sans-serif',
              lineHeight: 1.5,
              fontWeight: 350,
            }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
              filter: "blur(0px)",
              opacity: 0.85,
              transition: { duration: 1.2, delay: 0.4 }
            }}
          >
            {description}
          </motion.p>

          {/* Button */}
          <motion.a
            href="#"
            className="inline-flex items-center justify-center cursor-pointer"
            style={{
              borderBottomWidth: '1px',
              borderColor: 'rgba(255, 255, 255, 0.15)',
              borderLeftWidth: '1px',
              borderRightWidth: '1px',
              borderStyle: 'solid',
              borderTopWidth: '1px',
              backdropFilter: 'blur(0px)',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderRadius: '64px',
              padding: '12px 24px',
              textDecoration: 'none',
            }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              filter: "blur(0px)",
              opacity: 1,
              transition: { duration: 1.2, delay: 0.6 }
            }}
            whileHover={{
              filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))",
              backgroundColor: "rgba(255, 255, 255, 0.05)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              console.log(`Clicked: ${buttonText}`);
            }}
          >
            <motion.p
              className="text-white font-medium"
              style={{
                fontSize: '16px',
                fontFamily: 'Geist, sans-serif',
                margin: 0,
                outline: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                flexShrink: 0,
                transform: 'none',
                opacity: 1,
              }}
            >
              {buttonText}
            </motion.p>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardDemo;
