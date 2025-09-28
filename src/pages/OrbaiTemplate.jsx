import React from 'react';
import OrbaiDemo from '../../data/components/Hero/OrbaiDemo';
import QuoteDemo from '../../data/components/Text/QuoteDemo';
import DemoOne from '../../data/components/Navbars/designaliDemo';
import OrbFeatureDemo from '../../data/components/Features/OrbFeatureDemo';
import OrbProcessDemo from '../../data/components/Process/OrbProcessDemo';
import ProjectTabDemo from '../../data/components/Cards/ProjectTabDemo';
import TestimonialsDemo from '../../data/components/Testimonials/TestimonialsDemo';
import { Default as AnimatedGlassyPricingDemo } from '../../data/components/Pricing/AnimatedGlassyPricingDemo';

export default function OrbaiTemplate() {
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
    </div>
  );
}
