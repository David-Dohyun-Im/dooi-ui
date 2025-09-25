import React from 'react';
import OrbaiDemo from '../../data/components/Hero/OrbaiDemo';
import QuoteDemo from '../../data/components/Text/QuoteDemo';
import DemoOne from '../../data/components/Navbars/designaliDemo';
import OrbaiBenefitsDemo from '../../data/components/Benefits/OrbaiBenefitsDemo';

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
      
      {/* 혜택 섹션 */}
      <OrbaiBenefitsDemo />
    </div>
  );
}
