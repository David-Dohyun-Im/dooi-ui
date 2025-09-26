import { motion } from 'framer-motion'
import { InteractiveHoverButton } from './interactive-hover-button'

interface PearlHeroProps {
  subtitle?: string
  title?: string
  ctaText?: string
  ctaLink?: string
}

export const PearlHero = ({ 
  subtitle = "Branding · Product Design",
  title = "Discover the essence of Pearl, a free Framer template. Let's shape your brand into a masterpiece together.",
  ctaText = "Get for free",
  ctaLink = "https://framer.com/projects/new?duplicate=Z7D4Y2ypAczRKN1T3YSt&via=dpietrasiak"
}: PearlHeroProps) => {
  return (
    <section className="w-full py-20" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
      <div className="max-w-[1990px] mx-auto">
        <div className="flex flex-col items-start text-left max-w-4xl">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
            style={{ marginBottom: '80px' }}
          >
            <p 
              style={{
                color: 'rgb(0, 0, 0)',
                fontSize: '18px',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: '500',
                lineHeight: '25.2px',
                margin: 0,
                padding: 0,
                textAlign: 'left',
                textDecoration: 'none',
                textTransform: 'none',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              {subtitle}
            </p>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="w-full"
            style={{ marginBottom: '80px' }}
          >
            <h1 
              style={{
                boxSizing: 'border-box',
                color: 'rgb(0, 0, 0)',
                display: 'block',
                fontFamily: 'Manrope, "Manrope Placeholder", sans-serif',
                fontFeatureSettings: 'normal',
                fontSize: '64px',
                fontStyle: 'normal',
                fontVariationSettings: 'normal',
                fontWeight: '500',
                height: '230.406px',
                letterSpacing: 'normal',
                lineHeight: '76.8px',
                marginBlockEnd: '0px',
                marginBlockStart: '0px',
                marginBottom: '0px',
                marginInlineEnd: '0px',
                marginInlineStart: '0px',
                marginLeft: '0px',
                marginRight: '0px',
                marginTop: '0px',
                overflowWrap: 'break-word',
                paddingBottom: '0px',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                textAlign: 'left',
                textDecorationColor: 'rgb(0, 0, 0)',
                textDecorationLine: 'none',
                textDecorationSkipInk: 'auto',
                textDecorationStyle: 'solid',
                textDecorationThickness: 'auto',
                textTransform: 'none',
                textUnderlineOffset: 'auto',
                textWrap: 'wrap',
                unicodeBidi: 'isolate',
                whiteSpaceCollapse: 'preserve',
                width: '1200px',
                wordBreak: 'break-word',
                WebkitFontSmoothing: 'antialiased',
                WebkitTextStrokeColor: 'rgb(0, 0, 0)',
                WebkitTextStrokeWidth: '0px'
              }}
            >
              <span style={{ color: 'rgb(0, 0, 0)' }}>
                {title.split('.')[0]}. 
              </span>
              <span style={{ color: '#969696' }}>
                {title.split('.').slice(1).join('.').trim()}
              </span>
            </h1>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            style={{ marginBottom: '60px' }}
          >
            <InteractiveHoverButton
              text={ctaText}
              className="!p-0 !bg-black !border-transparent !text-white"
              style={{
                width: '184px',
                height: '57px',
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingLeft: '32px',
                paddingRight: '32px',
                fontSize: '18px',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: '500',
                lineHeight: '25.2px',
                WebkitFontSmoothing: 'antialiased',
                color: 'white'
              }}
              onClick={() => window.open(ctaLink, '_blank', 'noopener,noreferrer')}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
