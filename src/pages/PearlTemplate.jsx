import React from 'react'
import { PearlNavbar } from '../../data/components/ui/pearl-navbar.tsx'
import { PearlHero } from '../../data/components/ui/pearl-hero.tsx'
import ProjectGridDemo from '../../data/components/Cards/ProjectGridDemo.tsx'

const PearlTemplate = () => {
  return (
    <div className="min-h-screen bg-white">
      <PearlNavbar />
      <PearlHero />
      <ProjectGridDemo />
    </div>
  )
}

export default PearlTemplate
