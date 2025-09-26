import React from 'react'
import PearlNavbarDemo from '../../data/components/Navbars/PearlNavbarDemo.tsx'
import PearlHeroDemo from '../../data/components/Hero/PearlHeroDemo.tsx'
import OurStoryDemo from '../../data/components/Features/OurStoryDemo.tsx'
import ProjectGridDemo from '../../data/components/Cards/ProjectGridDemo.tsx'
import AccordionDemo from '../../data/components/Toggle/AccordionDemo.tsx'
import StaggerTestimonialsDemo from '../../data/components/Testimonials/StaggerTestimonialsDemo.tsx'

const PearlTemplate = () => {
  return (
    <div className="min-h-screen bg-white">
      <PearlNavbarDemo />
      <PearlHeroDemo />
      <ProjectGridDemo />
      <OurStoryDemo />
      <AccordionDemo />
      <StaggerTestimonialsDemo />
    </div>
  )
}

export default PearlTemplate
