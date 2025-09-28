import React, { useEffect } from 'react';
import Lenis from 'lenis';
import OrbaiDemo from '../../data/components/Hero/OrbaiDemo';
import QuoteDemo from '../../data/components/Text/QuoteDemo';
import DemoOne from '../../data/components/Navbars/designaliDemo';
import OrbFeatureDemo from '../../data/components/Features/OrbFeatureDemo';
import OrbProcessDemo from '../../data/components/Process/OrbProcessDemo';
import ProjectTabDemo from '../../data/components/Cards/ProjectTabDemo';
import TestimonialsDemo from '../../data/components/Testimonials/TestimonialsDemo';
import { Default as AnimatedGlassyPricingDemo } from '../../data/components/Pricing/AnimatedGlassyPricingDemo';
import { FaqSectionWithCategoriesDemo } from '../../data/components/FAQ/FAQMiddleDemo';
import { StackedCircularFooterDemo } from '../../data/components/Footer/StackCircularFooterMiddleDemo';

export default function OrbaiTemplate() {
      useEffect(() => {
        // Lenis 스크롤 초기화 - 래퍼런스와 비슷한 감도로 설정
        const lenis = new Lenis({
          duration: 1.5, // 더 부드러운 스크롤을 위해 duration 증가
          easing: (t) => 1 - Math.pow(1 - t, 3), // cubic-out 이징으로 더 자연스러운 감속
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 0.8, // 마우스 휠 감도 감소
          smoothTouch: true, // 터치에서도 부드러운 스크롤 활성화
          touchMultiplier: 1.5, // 터치 감도 조정
          infinite: false,
        });

    // RAF 루프에서 lenis 업데이트
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 컴포넌트 언마운트 시 정리
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* 네비게이션 */}
      <DemoOne />
      
      {/* 히어로 섹션 */}
      <OrbaiDemo />
      
      {/* 인용구 섹션 */}
      <div className="py-16 px-4">
        <QuoteDemo />
      </div>
      
      {/* Features 섹션 */}
      <OrbFeatureDemo />
      
      {/* Process 섹션 */}
      <OrbProcessDemo />
      
      {/* Project Tab 섹션 */}
      <ProjectTabDemo />
      
      {/* Testimonials 섹션 */}
      <TestimonialsDemo />
      
      {/* Pricing 섹션 */}
      <AnimatedGlassyPricingDemo />
      
      {/* FAQ 섹션 */}
      <section className="py-20 px-4 bg-white" id="faq">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-25">
            <h2 className="mb-6">
              <span 
                className="bg-clip-text text-transparent inline-block text-center"
                style={{
                  backgroundImage: 'linear-gradient(180deg, rgb(14, 28, 41) 34%, rgb(255, 255, 255) 124%)',
                  fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                  fontSize: '56px',
                  fontWeight: 500,
                  letterSpacing: '-0.56px',
                  lineHeight: '67.2px',
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                FAQs
              </span>
            </h2>
          </div>
          
          <FaqSectionWithCategoriesDemo />
        </div>
      </section>
      
      {/* 구분선 - Footer 전 */}
      <div className="flex justify-center">
        <div className="w-3/5 h-px bg-gray-300"></div>
      </div>
      
      {/* Footer 섹션 */}
      <StackedCircularFooterDemo />
    </div>
  );
}
