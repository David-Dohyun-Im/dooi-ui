"use client";
import React from "react";
import { motion } from "framer-motion";

// GroundAI 로고 아이콘 (네잎클로버 스타일)
const GroundAIIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"
      fill="currentColor"
    />
    <path
      d="M8 12C8 10.9 8.9 10 10 10H14C15.1 10 16 10.9 16 12V16C16 17.1 15.1 18 14 18H10C8.9 18 8 17.1 8 16V12Z"
      fill="currentColor"
    />
  </svg>
);

// 화살표 아이콘
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M8 0L9.41 1.41L3.83 7H16V9H3.83L9.41 14.59L8 16L0 8L8 0Z"
      fill="currentColor"
    />
  </svg>
);

export const MoodHeroDemo = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
       {/* 폰트 정의 */}
       <style jsx>{`
         @font-face {
           font-family: 'Playfair Display Italic';
           src: url('/fonts/Playflair Display/static/PlayfairDisplay-Italic.ttf') format('truetype');
           font-weight: 400;
           font-style: normal;
         }
         @font-face {
           font-family: 'Arial Rounded MT Regular';
           src: url('/fonts/ArialRounded/Arial Rounded MT Regular/Arial Rounded MT Regular.ttf') format('truetype');
           font-weight: 100;
           font-style: normal;
         }
       `}</style>
      {/* 배경 이미지 - mood-1.svg */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg/mood-1.svg')`,
          filter: 'sepia(20%) saturate(0.8) hue-rotate(30deg) brightness(0.9)'
        }}
      >
        {/* 오버레이로 베이지 톤 강화 */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-orange-50/30 to-yellow-100/40"></div>
      </div>


       {/* 메인 콘텐츠 - 중앙 배치 */}
       <div className="relative z-10 hero flex items-center justify-center min-h-screen px-4">
         <div className="max-w-[720px] mx-auto text-center">
          
           {/* 1줄: Meet YourAI */}
           <motion.h1 
             className="text-[68px] font-light text-white leading-[1.05]"
             style={{ 
               fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
               fontWeight: '100',
               letterSpacing: '-0.05em'
             }}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
           >
             Meet YourAI.
           </motion.h1>
          
           {/* 2줄: Reimagine work with adaptive thinking */}
           <motion.h2 
             className="text-[60px] text-white leading-[1.05] mb-8"
             style={{ 
               fontFamily: 'Inter, SF Pro Display, Pretendard, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
               letterSpacing: '-0.05em'
             }}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
           >
             <span 
               className="font-normal"
               style={{ 
                 fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                 fontWeight: '400',
                 letterSpacing: '-0.05em'
               }}
             >
               Reimagine work
             </span>
             <span 
               className="font-normal"
               style={{ 
                 fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                 fontWeight: '100',
                 letterSpacing: '-0.05em'
               }}
             >
               {" "}with
             </span>
             <br />
             <span 
               className="font-normal"
               style={{ 
                 fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                 fontWeight: '100',
                 letterSpacing: '-0.05em'
               }}
             >
               adaptive thinking
             </span>
           </motion.h2>

          {/* CTA 버튼 */}
          <motion.button 
            className="bg-white text-black rounded-2xl font-medium"
            style={{ 
              fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
              fontWeight: '500',
              padding: '11.2px 22.4px',
              fontSize: '16px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            Start free decoration
          </motion.button>
        </div>
      </div>

        {/* 하단 좌측: 설명 텍스트 */}
        <motion.div 
          className="absolute bottom-8 left-8 max-w-md z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <p 
            className="text-white text-lg"
            style={{ 
              fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
              fontWeight: '100',
              lineHeight: '1.2'
            }}
          >
            It helps you explore, create, and refine ideas
            through natural interactions.
            From drafting concepts and options to shaping
            workflows and outputs, it adapts to your style.
          </p>
        </motion.div>

       {/* 하단 우측: 버튼들 */}
       <motion.div 
         className="absolute bottom-8 right-8 max-w-sm z-20"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
       >
         <div className="space-y-2">
             <motion.button 
               className="w-full bg-transparent border-2 border-white/30 text-white px-6 rounded-2xl text-left hover:bg-white/10 transition-all duration-300 flex items-center group"
               style={{ 
                 fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                 fontWeight: '100',
                 height: '50px'
               }}
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
             >
               <span className="text-lg font-light">Solutions for complex tasks</span>
             </motion.button>

           <div className="flex items-center gap-2">
              <motion.button 
                className="flex-1 bg-transparent border-2 border-white/30 text-white px-6 rounded-2xl text-left hover:bg-white/10 transition-all duration-300 flex items-center group"
                style={{ 
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: '100',
                  height: '50px'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg font-light">Conversational & Adaptive</span>
              </motion.button>
             
             <motion.button 
               className="bg-transparent border-2 border-white/30 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
               style={{ 
                 width: '50px',
                 height: '50px'
               }}
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
             >
               <svg
                 width="24"
                 height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 className="text-white"
               >
                 <path
                   d="M7 17L17 7M17 7H7M17 7V17"
                   stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 />
               </svg>
             </motion.button>
           </div>
        </div>
      </motion.div>

      {/* 하단 그라데이션 오버레이 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-100/20 to-transparent"></div>
      
      {/* Hero 끝부분 블러 오버레이 */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-black/10 via-black/1 to-transparent backdrop-blur-sm z-10"></div>
    </div>
  );
};
