import { AnimatedContainer,
  BgGradient,
  Hero } from "../ui/hero-animated"

export function BlackSaaSHeroDemo() {

    return (
        <Hero className="space-y-4 px-6 pt-12 pb-0 text-zinc-100 md:px-10 lg:px-12 bg-black relative h-[1000px]">
        <BgGradient
          gradientColors={"blue"}
          gradientSize="lg"
          className="absolute top-0 left-0 right-0 h-1/2 opacity-30"
        />
        
        {/* Announcing API 2.0 Banner */}
        <AnimatedContainer className="flex justify-center py-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 backdrop-blur-sm bg-white/5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="currentColor"/>
            </svg>
            <span className="text-sm font-medium text-white/80 font-['Geist']">Announcing API 2.0</span>
          </div>
        </AnimatedContainer>

        {/* Main Title */}
        <AnimatedContainer className="text-center py-6">
          <div className="mx-auto w-[800px] h-[153px] flex items-center justify-center">
            <h1 className="text-[64px] font-medium tracking-[-0.04em] text-white font-['Geist'] leading-tight">
              The AI layer that brings <span style={{ 
                boxSizing: 'border-box',
                color: 'inherit',
                display: 'inline-block',
                fontFamily: '"Source Serif 4", "Source Serif 4 Placeholder", serif',
                fontFeatureSettings: 'normal',
                fontSize: '64px',
                fontStyle: 'italic',
                fontVariationSettings: 'normal',
                fontWeight: '500',
                letterSpacing: 'normal',
                lineHeight: '76.8px',
                overflowWrap: 'break-word',
                textAlign: 'center',
                textDecorationSkipInk: 'auto',
                textTransform: 'none',
                textUnderlineOffset: 'auto',
                textWrap: 'wrap',
                whiteSpaceCollapse: 'preserve',
                willChange: 'transform',
                wordBreak: 'break-word',
                WebkitFontSmoothing: 'antialiased',
                WebkitTextStrokeColor: 'transparent',
                WebkitTextStrokeWidth: '0px'
              }}>clarity</span> to complexity.
            </h1>
          </div>
        </AnimatedContainer>

        {/* Subtitle */}
        <AnimatedContainer className="text-center py-6">
          <div className="mx-auto w-[600px] h-[50px] flex items-center justify-center">
            <p className="text-[18px] text-white/80 font-['Geist']">
              Our platform integrates seamlessly into your stack to deliver real-time understanding, not just predictions.
            </p>
          </div>
        </AnimatedContainer>

        {/* Buttons */}
        <AnimatedContainer
          className="flex items-center justify-center gap-4 pt-16"
          transition={{ delay: 0.6 }}
        >
          <button 
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors text-[16px] font-['Geist']"
            style={{
              borderBottomWidth: '0px',
              borderColor: 'rgba(0, 0, 0, 0)',
              borderLeftWidth: '0px',
              borderRightWidth: '0px',
              borderStyle: 'solid',
              borderTopWidth: '0px',
              backdropFilter: 'none',
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: '64px',
              willChange: 'auto'
            }}
          >
            Get started
          </button>
          <button 
            className="px-6 py-3 text-white rounded-full font-medium transition-colors text-[16px] font-['Geist']"
            style={{
              borderBottomWidth: '1px',
              borderColor: 'rgba(255, 255, 255, 0.15)',
              borderLeftWidth: '1px',
              borderRightWidth: '1px',
              borderStyle: 'solid',
              borderTopWidth: '1px',
              backdropFilter: 'blur(5px)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '64px',
              willChange: 'auto'
            }}
          >
            Learn more
          </button>
        </AnimatedContainer>
      </Hero>
    )
}
