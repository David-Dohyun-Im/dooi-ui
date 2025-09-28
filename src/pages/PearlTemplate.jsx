import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import PearlNavbarDemo from '../../data/components/Navbars/PearlNavbarDemo.tsx'
import PearlHeroDemo from '../../data/components/Hero/PearlHeroDemo.tsx'
import OurStoryDemo from '../../data/components/Features/OurStoryDemo.tsx'
import ProjectGridDemo from '../../data/components/Cards/ProjectGridDemo.tsx'
import AccordionDemo from '../../data/components/Toggle/AccordionDemo.tsx'
import StaggerTestimonialsDemo from '../../data/components/Testimonials/StaggerTestimonialsDemo.tsx'
import StickyFooter from '../../data/components/ui/sticky-footer.tsx'

const PearlTemplate = () => {
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
    <main className="bg-background text-foreground">
      <PearlNavbarDemo />
      <PearlHeroDemo />
      
      {/* ProjectGridDemo with consistent alignment - Center entrance */}
      <motion.div 
        className="py-24"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="w-full" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="max-w-[1990px] mx-auto w-full">
            <ProjectGridDemo />
          </div>
        </div>
      </motion.div>
      
      {/* OurStoryDemo with consistent alignment - Left to right entrance */}
      <motion.div 
        className="py-24"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="w-full" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="max-w-[1990px] mx-auto w-full">
            <OurStoryDemo />
          </div>
        </div>
      </motion.div>
      
      {/* AccordionDemo with consistent alignment - Left to right entrance */}
      <motion.div 
        className="py-24"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="w-full" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          <div className="max-w-[1990px] mx-auto w-full">
            <AccordionDemo />
          </div>
        </div>
      </motion.div>
      
      {/* StaggerTestimonialsDemo - Left to right entrance */}
      <motion.div
        className="py-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <StaggerTestimonialsDemo />
      </motion.div>
      
      {/* Sticky Footer Section */}
      <div className="h-[65vh] flex text-[4vw] md:text-[2vw] items-center justify-center bg-gradient-to-br from-background via-muted to-background px-4">
        <div className="text-center">
          <h2 className="leading-none font-serif text-transparent bg-clip-text bg-gradient-to-r from-foreground via-muted-foreground to-foreground/60 mb-6">
            This is an example of a sticky footer 
          </h2>
          <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>
      </div>

      <StickyFooter />
    </main>
  )
}

export default PearlTemplate
