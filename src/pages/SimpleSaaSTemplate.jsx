import React from 'react';
import { SimpleSaaSHeroDemo } from '../../data/components/Hero/SimpleSaaSHeroDemo';
import SimpleSaaSNavbar from '../../data/components/Navbars/SimpleSaaSNavbar';

export default function SimpleSaaSTemplate() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <SimpleSaaSNavbar />
      
      {/* Simple SaaS Hero Section */}
      <div className="pt-16">
        <SimpleSaaSHeroDemo />
      </div>
    </div>
  );
}
