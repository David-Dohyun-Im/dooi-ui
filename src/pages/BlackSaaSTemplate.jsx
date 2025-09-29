import React from 'react';
import { BlackSaaSHeroDemo } from '../../data/components/Hero/BlackSaaSHeroDemo';
import { Logos3Demo } from '../../data/components/Carousel/Logos3Demo';
import { MagicTextDemo } from '../../data/components/Text/MagicTextDemo';
import CardDemo from '../../data/components/Cards/CardDemo';
import { RadialOrbitalTimelineDemo } from '../../data/components/Process/RadialOrbitalTimelineDemo';
import { ScrollImageSwitchDemo } from '../../data/components/Cards/ScrollImageSwitchDemo';
import { Gallery4Demo } from '../../data/components/Carousel/Gallery4ProjectDemo';
import CyberneticBentoGridDemo from '../../data/components/Features/CyberneticBentoGridDemo';

export default function BlackSaaSTemplate() {
  return (
    <div className="min-h-screen bg-black">
      <BlackSaaSHeroDemo />
      <Logos3Demo />
      <MagicTextDemo />
      <CardDemo />
      <div className="py-24 flex flex-col items-center">
        <h2 className="text-[48px] text-white text-center mb-[30px]" style={{fontFamily: 'Geist, sans-serif'}}>How it works</h2>
        <RadialOrbitalTimelineDemo />
      </div>
      <ScrollImageSwitchDemo />
      <div className="py-24 flex flex-col items-center">
        <Gallery4Demo />
      </div>
      <CyberneticBentoGridDemo />
    </div>
  );
}
