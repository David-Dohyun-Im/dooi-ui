import React, { useState } from 'react'
import LandingMorphic from './pages/LandingMorphic.jsx'
import ShuffleTemplate from './pages/ShuffleTemplate.jsx'
import OrbaiTemplate from './pages/OrbaiTemplate.jsx'
import PearlTemplate from './pages/PearlTemplate.jsx'
import SimpleSaaSTemplate from './pages/SimpleSaaSTemplate.jsx'
import BlackSaaSTemplate from './pages/BlackSaaSTemplate.jsx'

const pages = [
  { id: 'landing-morphic', name: 'Landing Morphic', component: LandingMorphic },
  { id: 'shuffle-template', name: 'Shuffle Template', component: ShuffleTemplate },
  { id: 'orbai-demo', name: 'Orbai Template', component: OrbaiTemplate },
  { id: 'pearl-template', name: 'Pearl Template', component: PearlTemplate },
  { id: 'simple-saas-template', name: 'Simple SaaS Template', component: SimpleSaaSTemplate },
  { id: 'black-saas-template', name: 'Black SaaS Template', component: BlackSaaSTemplate }
]

function App() {
  const [currentPage, setCurrentPage] = useState('landing-morphic')
  
  const CurrentComponent = pages.find(page => page.id === currentPage)?.component || LandingMorphic

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 z-50 bg-black/20 backdrop-blur-sm rounded-lg p-2">
        <div className="flex gap-2">
          {pages.map(page => (
            <button
              key={page.id}
              onClick={() => setCurrentPage(page.id)}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                currentPage === page.id
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {page.name}
            </button>
          ))}
        </div>
      </nav>
      
      {/* Current Page */}
      <CurrentComponent />
    </div>
  )
}

export default App
