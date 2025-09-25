import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function OrbaiBenefitsDemo() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 스크롤 애니메이션 효과
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 0.5;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  const additionalBenefits = [
    { icon: "🚀", text: "Faster Innovation" },
    { icon: "💼", text: "Virtual Assistance" },
    { icon: "📊", text: "Scalable Solutions" },
    { icon: "👤", text: "Personalized Experiences" },
    { icon: "💰", text: "Cost Effective" },
    { icon: "📈", text: "Real-Time Insights" },
    { icon: "⚙️", text: "Automation" },
    { icon: "🎯", text: "Data-Driven Decisions" }
  ];

  return (
    <section className="py-20 px-4 bg-white pb-32">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          {/* BENEFITS 배지 */}
          <div className="inline-flex items-center gap-2 bg-[rgb(245,245,245)] rounded-[60px] px-3 py-1.5 mb-6 shadow-[0px_0.706592px_0.706592px_-0.541667px_rgba(0,0,0,0.1),0px_1.80656px_1.80656px_-1.08333px_rgba(0,0,0,0.09),0px_3.62176px_3.62176px_-1.625px_rgba(0,0,0,0.09),0px_6.8656px_6.8656px_-2.16667px_rgba(0,0,0,0.09),0px_13.6468px_13.6468px_-2.70833px_rgba(0,0,0,0.08),0px_30px_30px_-3.25px_rgba(0,0,0,0.05),0px_3px_1px_0px_rgba(255,255,255,1)_inset]">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 256 256" 
              className="w-4 h-4 fill-[rgba(0,0,0,0.4)]"
            >
              <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
            </svg>
            <p className="text-xs font-medium text-black">BENEFITS</p>
          </div>

          {/* 메인 제목 */}
          <h2 
            className="font-medium mb-6 text-center"
            style={{
              background: 'linear-gradient(0deg, rgb(14, 28, 41) 34%, rgb(124, 124, 124) 124%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
              fontSize: '56px',
              letterSpacing: '-0.56px',
              lineHeight: '67.2px',
              textAlign: 'center',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            Why Choose Us
          </h2>

          {/* 설명 */}
          <p 
            className="framer-text framer-styles-preset-1khckfh" 
            data-styles-preset="cH8AiB6P_" 
            style={{ '--framer-text-alignment': 'center' } as React.CSSProperties}
          >
            Partner with an AI agency delivering smart solutions.
          </p>
        </div>

        {/* 주요 혜택 카드들 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Real-Time Analytics 카드 */}
          <motion.div 
            className="bg-[rgb(245,245,245)] rounded-[20px] shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] p-8"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            style={{ height: '360px' }}
          >
            {/* 이미지 영역 */}
            <div className="flex justify-center items-center mb-6" style={{ height: '180px' }}>
              <div className="w-40 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            
            {/* 텍스트 영역 */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">Real-Time Analytics</h3>
              <p className="text-black/80">Stay ahead with accurate, real-time performance tracking</p>
            </div>
          </motion.div>

          {/* AI-Driven Growth 카드 */}
          <motion.div 
            className="bg-[rgb(245,245,245)] rounded-[20px] shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] p-8"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            style={{ height: '360px' }}
          >
            {/* 이미지 영역 */}
            <div className="flex justify-center items-center mb-6" style={{ height: '180px' }}>
              <div className="w-40 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            
            {/* 텍스트 영역 */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">AI-Driven Growth</h3>
              <p className="text-black/80 mb-4">Make smarter moves with accurate, real-time business insights.</p>
              
              {/* 통계 배지들 */}
              <div className="flex flex-wrap gap-2">
                <div className="bg-white rounded-full px-3 py-1 text-xs font-medium text-black shadow-sm border">
                  80% Automation
                </div>
                <div className="bg-white rounded-full px-3 py-1 text-xs font-medium text-black shadow-sm border">
                  10% Cost
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sync in real time 카드 */}
          <motion.div 
            className="bg-[rgb(245,245,245)] rounded-[20px] shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset] p-8"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            style={{ height: '360px' }}
          >
            {/* 이미지 영역 */}
            <div className="flex justify-center items-center mb-6" style={{ height: '180px' }}>
              <div className="w-40 h-32 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            
            {/* 텍스트 영역 */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-3">Sync in real time</h3>
              <p className="text-black/80">connect with your team instantly to track progress and updates</p>
            </div>
          </motion.div>
        </div>

        {/* 스크롤 가능한 추가 혜택 목록 */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
            }}
          >
            {[...additionalBenefits, ...additionalBenefits].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 bg-[rgb(245,245,245)] rounded-[228px] px-4 py-3 flex items-center gap-3 shadow-[rgba(0,0,0,0.08)_0px_0.706592px_0.706592px_-0.666667px,rgba(0,0,0,0.08)_0px_1.80656px_1.80656px_-1.33333px,rgba(0,0,0,0.07)_0px_3.62176px_3.62176px_-2px,rgba(0,0,0,0.07)_0px_6.8656px_6.8656px_-2.66667px,rgba(0,0,0,0.05)_0px_13.6468px_13.6468px_-3.33333px,rgba(0,0,0,0.02)_0px_30px_30px_-4px,rgb(255,255,255)_0px_3px_1px_0px_inset]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <span className="text-sm">{benefit.icon}</span>
                </div>
                <p className="text-sm text-black whitespace-nowrap">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
