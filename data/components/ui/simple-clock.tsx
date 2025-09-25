import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SimpleClock() {
  const [currentState, setCurrentState] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 3초마다 상태 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentState(prev => (prev + 1) % 2);
      
      // 애니메이션 완료 후 상태 리셋
      setTimeout(() => {
        setIsAnimating(false);
      }, 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      {/* 메인 시계판 */}
      <motion.div 
        className="absolute w-16 h-16 bg-white rounded-full shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),rgb(255,255,255)_0px_3px_1px_0px_inset]"
        animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.3 }}
      />
      
      {/* 시계 바늘 */}
      <motion.div 
        className="absolute w-8 h-2 bg-white rounded-full shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),rgb(255,255,255)_0px_3px_1px_0px_inset] origin-left"
        animate={{
          rotate: currentState === 0 ? 0 : 45,
          scale: isAnimating ? [1, 1.1, 1] : 1
        }}
        transition={{ 
          duration: 0.8, 
          ease: "easeInOut",
          scale: { duration: 0.3 }
        }}
      />
      
      {/* 중앙 피벗 */}
      <motion.div 
        className="absolute w-2 h-2 bg-black rounded-full z-10"
        animate={isAnimating ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3 }}
      />
      
      {/* 상태에 따른 마커들 */}
      {currentState === 0 ? (
        // 첫 번째 상태: 1시 방향 마커
        <motion.div 
          className="absolute w-2 h-2 bg-white rounded-full shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),rgb(255,255,255)_0px_3px_1px_0px_inset]"
          style={{
            top: '20%',
            right: '25%'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: isAnimating ? [-2, 2, -2] : 0
          }}
          transition={{ 
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
            y: { duration: 0.6, repeat: isAnimating ? 1 : 0 }
          }}
        />
      ) : (
        // 두 번째 상태: 12시, 3시, 6시 방향 마커들
        <>
          {/* 12시 방향 마커 */}
          <motion.div 
            className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),rgb(255,255,255)_0px_3px_1px_0px_inset]"
            style={{
              top: '15%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: isAnimating ? [-1, 1, -1] : 0
            }}
            transition={{ 
              opacity: { duration: 0.3, delay: 0.1 },
              scale: { duration: 0.3, delay: 0.1 },
              y: { duration: 0.6, repeat: isAnimating ? 1 : 0, delay: 0.1 }
            }}
          />
          
          {/* 3시 방향 마커 */}
          <motion.div 
            className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),rgb(255,255,255)_0px_3px_1px_0px_inset]"
            style={{
              right: '15%',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: isAnimating ? [-1, 1, -1] : 0
            }}
            transition={{ 
              opacity: { duration: 0.3, delay: 0.2 },
              scale: { duration: 0.3, delay: 0.2 },
              x: { duration: 0.6, repeat: isAnimating ? 1 : 0, delay: 0.2 }
            }}
          />
          
          {/* 6시 방향 마커 */}
          <motion.div 
            className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-[0px_0.706592px_0.706592px_-0.666667px_rgba(0,0,0,0.08),0px_1.80656px_1.80656px_-1.33333px_rgba(0,0,0,0.08),0px_3.62176px_3.62176px_-2px_rgba(0,0,0,0.07),0px_6.8656px_6.8656px_-2.66667px_rgba(0,0,0,0.07),0px_13.6468px_13.6468px_-3.33333px_rgba(0,0,0,0.05),0px_30px_30px_-4px_rgba(0,0,0,0.02),rgb(255,255,255)_0px_3px_1px_0px_inset]"
            style={{
              bottom: '15%',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: isAnimating ? [1, -1, 1] : 0
            }}
            transition={{ 
              opacity: { duration: 0.3, delay: 0.3 },
              scale: { duration: 0.3, delay: 0.3 },
              y: { duration: 0.6, repeat: isAnimating ? 1 : 0, delay: 0.3 }
            }}
          />
        </>
      )}
    </div>
  );
}
