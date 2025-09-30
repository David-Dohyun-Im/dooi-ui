import React from 'react';
import { motion } from 'framer-motion';

const OrbProcessDemo = () => {
  return (
    <section className="py-20 px-4 bg-white" id="process">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.h2 
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span 
              className="inline-block text-center"
              style={{
                color: '#000000',
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontSize: '56px',
                fontWeight: 100,
                letterSpacing: '-0.56px',
                lineHeight: '67.2px',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              Simple & Scalable
            </span>
          </motion.h2>
          
        </div>

        {/* Process Steps Container - 정확한 크기: 1200x1192 */}
        <div className="flex gap-6 mx-auto" style={{ width: '1200px', height: '1192px' }}>
          {/* 왼쪽 카드 - 588x1192 */}
          <motion.div 
            className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200 overflow-hidden" 
            style={{ 
              width: '588px', 
              height: '1192px',
              paddingTop: '30px',
              paddingBottom: '44px',
              paddingLeft: '30px',
              paddingRight: '30px'
            }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            {/* 상단 텍스트 영역 */}
            <div className="mb-6">
              <div className="flex items-center justify-center mb-4" style={{
                width: '72px',
                height: '65.0417px',
                backgroundImage: 'linear-gradient(0deg, #000000 0%, #ffffff 170%)',
                borderRadius: '10px',
                boxShadow: '0px 0.706592px 0.706592px -0.541667px rgba(0, 0, 0, 0.1), 0px 1.80656px 1.80656px -1.08333px rgba(0, 0, 0, 0.1), 0px 3.62176px 3.62176px -1.625px rgba(0, 0, 0, 0.1), 0px 6.8656px 6.8656px -2.16667px rgba(0, 0, 0, 0.1), 0px 13.6468px 13.6468px -2.70833px rgba(0, 0, 0, 0.1), 0px 30px 30px -3.25px rgba(0, 0, 0, 0.1)',
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '10px',
                paddingRight: '10px',
                fontFamily: 'sans-serif',
                fontSize: '12px',
                WebkitFontSmoothing: 'antialiased'
              }}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  className="text-white"
                  fill="currentColor"
                  style={{ width: '52px', height: '45.5px' }}
                >
                  <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z" />
                  <path d="M15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z" />
                </svg>
              </div>
                <h3 className="mb-2" style={{
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontSize: '20px',
                  fontWeight: '100',
                  color: '#000000'
                }}>
                  Workflow Assessment
                </h3>
              <p className="text-gray-600 leading-relaxed mb-4" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px'
              }}>
                We begin by examining your existing workflows to identify where AI can deliver the greatest impact.
              </p>
              
              <div className="flex items-center justify-between">
                <h2 className="text-gray-900" style={{
                  fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                  fontSize: '44px',
                  fontWeight: '500'
                }}>01</h2>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                  <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                </div>
              </div>
            </div>
            
            {/* 하단 이미지 영역 - 528x819.15 */}
            <div className="relative overflow-hidden rounded-2xl" style={{ width: '528px', height: '819.15px' }}>
              <img 
                src="https://framerusercontent.com/images/I11kmPYZO5IptYaE3LYgilI1Xk.jpeg?width=1200&height=800" 
                alt="Workflow Assessment"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* 오른쪽 카드들 - 588x584 각각, 24px 간격 */}
          <div className="flex flex-col gap-6">
            {/* Step 2 카드 - 588x584 */}
            <motion.div 
              className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200 overflow-hidden" 
              style={{ 
                width: '588px', 
                height: '584px',
                paddingTop: '30px',
                paddingBottom: '44px',
                paddingLeft: '30px',
                paddingRight: '30px'
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              {/* 상단 텍스트 영역 */}
              <div className="mb-6">
                <div className="flex items-center justify-center mb-4" style={{
                  width: '72px',
                  height: '65.0417px',
                  backgroundImage: 'linear-gradient(0deg, #000000 0%, #ffffff 170%)',
                  borderRadius: '10px',
                  boxShadow: '0px 0.706592px 0.706592px -0.541667px rgba(0, 0, 0, 0.1), 0px 1.80656px 1.80656px -1.08333px rgba(0, 0, 0, 0.1), 0px 3.62176px 3.62176px -1.625px rgba(0, 0, 0, 0.1), 0px 6.8656px 6.8656px -2.16667px rgba(0, 0, 0, 0.1), 0px 13.6468px 13.6468px -2.70833px rgba(0, 0, 0, 0.1), 0px 30px 30px -3.25px rgba(0, 0, 0, 0.1)',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  fontFamily: 'sans-serif',
                  fontSize: '12px',
                  WebkitFontSmoothing: 'antialiased'
                }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    className="text-white"
                    fill="currentColor"
                    style={{ width: '52px', height: '45.5px' }}
                  >
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2" style={{
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontSize: '20px',
                  fontWeight: '100',
                  color: '#000000'
                }}>
                  Deploy with Confidence
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}>
                  Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.
                </p>
                
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-900" style={{
                    fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                    fontSize: '44px',
                    fontWeight: '500'
                  }}>02</h2>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                  </div>
                </div>
              </div>
              
              {/* 하단 이미지 영역 - 528x211.15 */}
              <div className="relative overflow-hidden rounded-2xl" style={{ width: '528px', height: '211.15px' }}>
                <img 
                  src="https://framerusercontent.com/images/ozpQ1n5ntn1iNwWiM7StpAZO2IM.jpeg?scale-down-to=1024" 
                  alt="Deploy with Confidence"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Step 3 카드 - 588x584 */}
            <motion.div 
              className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200 overflow-hidden" 
              style={{ 
                width: '588px', 
                height: '584px',
                paddingTop: '30px',
                paddingBottom: '44px',
                paddingLeft: '30px',
                paddingRight: '30px'
              }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              {/* 상단 텍스트 영역 */}
              <div className="mb-6">
                <div className="flex items-center justify-center mb-4" style={{
                  width: '72px',
                  height: '65.0417px',
                  backgroundImage: 'linear-gradient(0deg, #000000 0%, #ffffff 170%)',
                  borderRadius: '10px',
                  boxShadow: '0px 0.706592px 0.706592px -0.541667px rgba(0, 0, 0, 0.1), 0px 1.80656px 1.80656px -1.08333px rgba(0, 0, 0, 0.1), 0px 3.62176px 3.62176px -1.625px rgba(0, 0, 0, 0.1), 0px 6.8656px 6.8656px -2.16667px rgba(0, 0, 0, 0.1), 0px 13.6468px 13.6468px -2.70833px rgba(0, 0, 0, 0.1), 0px 30px 30px -3.25px rgba(0, 0, 0, 0.1)',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  fontFamily: 'sans-serif',
                  fontSize: '12px',
                  WebkitFontSmoothing: 'antialiased'
                }}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    className="text-white"
                    fill="currentColor"
                    style={{ width: '52px', height: '45.5px' }}
                  >
                    <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z" />
                    <circle cx="9" cy="13" r="1" />
                    <circle cx="15" cy="13" r="1" />
                    <path d="M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47z" />
                  </svg>
                </div>
                <h3 className="mb-2" style={{
                  fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                  fontSize: '20px',
                  fontWeight: '500',
                  color: '#000000'
                }}>
                  Ongoing Support & Optimization
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px'
                }}>
                  After deployment, we provide support and refine your AI systems to keep them performing at their best.
                </p>
                
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-900" style={{
                    fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                    fontSize: '44px',
                    fontWeight: '500'
                  }}>03</h2>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                    <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* 하단 이미지 영역 - 528x211.15 */}
              <div className="relative overflow-hidden rounded-2xl" style={{ width: '528px', height: '211.15px' }}>
                <img 
                  src="https://framerusercontent.com/images/rL2mn1WNvlJqhxa5RfsgWqkaxg.png?width=800&height=1015" 
                  alt="Ongoing Support & Optimization"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrbProcessDemo;
