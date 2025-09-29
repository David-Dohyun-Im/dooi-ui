import { ScrollImageSwitch, ScrollContent, ImageSwitch } from "../ui/scroll-image-switch"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"

// 데모용 이미지들 (600x600 크기)
const DEMO_IMAGES = [
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop", 
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=600&fit=crop"
]

const SCROLL_SECTIONS = [
  {
    id: "section-1",
    title: "첫 번째 섹션",
    subtitle: "AI chat",
    description: "Chat experience for fast and smart conversations",
    content: "A conversational AI assistant that understands your questions, provides intelligent answers, and helps you get things done fast from casual chats to complex tasks.",
    icon: "⭐",
    color: "rgb(242, 183, 108)"
  },
  {
    id: "section-2", 
    title: "두 번째 섹션",
    subtitle: "AI assistant",
    description: "AI assistant for efficient time management",
    content: "Let the AI schedule meetings, set reminders, and automatically attach relevant files. Save time and stay better organized with intelligent and context aware planning.",
    icon: "🤖",
    color: "rgb(126, 196, 227)"
  },
  {
    id: "section-3",
    title: "세 번째 섹션", 
    subtitle: "AI transcription",
    description: "Audio transcription for fast and accurate text",
    content: "Automatically convert speech into accurate, editable text in real time. Perfect for meetings, interviews, voice notes, and more, powered by advanced speech recognition technology.",
    icon: "🎤",
    color: "rgb(126, 234, 155)"
  }
]

const ScrollImageSwitchDemo = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white py-20 px-4">
      <div className="grid md:grid-cols-2 min-h-screen max-w-7xl mx-auto" style={{ gap: "148px" }}>
        {/* 왼쪽 스크롤 컨텐츠 */}
        <div className="relative">
          <div className="p-8 md:p-12 space-y-0">
            {SCROLL_SECTIONS.map((section, index) => {
              const ref = useRef(null)
              const isInView = useInView(ref, { 
                threshold: 0.5,
                once: false 
              })
              
              return (
                <motion.div
                  key={section.id}
                  ref={ref}
                  className="space-y-6 flex flex-col justify-center"
                  style={{ minHeight: "100vh" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0.3,
                    y: isInView ? 0 : 50
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Title Wrapper */}
                  <div className="space-y-6">
                    {/* Pill with icon and subtitle */}
                    <div className="flex items-center gap-3">
                      <span 
                        className="text-lg"
                        style={{ color: section.color }}
                      >
                        {section.icon}
                      </span>
                      <span 
                        className="text-sm font-medium"
                        style={{ color: section.color, fontFamily: 'Geist, sans-serif' }}
                      >
                        {section.subtitle}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <div style={{ gap: "24px", display: "flex", flexDirection: "column" }}>
                      {/* Main title */}
                      <h1 
                        style={{
                          backgroundColor: "transparent",
                          borderBottomLeftRadius: "0px",
                          borderBottomRightRadius: "0px",
                          borderTopLeftRadius: "0px",
                          borderTopRightRadius: "0px",
                          boxSizing: "border-box",
                          color: "rgb(255, 255, 255)",
                          display: "block",
                          fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                          fontFeatureSettings: "normal",
                          fontSize: "48px",
                          fontStyle: "normal",
                          fontVariationSettings: "normal",
                          fontWeight: "500",
                          height: "115.208px",
                          letterSpacing: "-1.92px",
                          lineHeight: "57.6px",
                          marginBlockEnd: "0px",
                          marginBlockStart: "0px",
                          marginBottom: "0px",
                          marginInlineEnd: "0px",
                          marginInlineStart: "0px",
                          marginLeft: "0px",
                          marginRight: "0px",
                          marginTop: "0px",
                          overflowWrap: "break-word",
                          paddingBottom: "0px",
                          paddingLeft: "0px",
                          paddingRight: "0px",
                          paddingTop: "0px",
                          textAlign: "left",
                          textDecorationColor: "rgb(255, 255, 255)",
                          textDecorationLine: "none",
                          textDecorationSkipInk: "auto",
                          textDecorationStyle: "solid",
                          textDecorationThickness: "auto",
                          textTransform: "none",
                          textUnderlineOffset: "auto",
                          textWrapMode: "wrap",
                          textWrapStyle: "auto",
                          unicodeBidi: "isolate",
                          whiteSpaceCollapse: "preserve",
                          width: "586px",
                          wordBreak: "break-word",
                          WebkitFontSmoothing: "antialiased",
                          WebkitTextStrokeColor: "rgb(255, 255, 255)",
                          WebkitTextStrokeWidth: "0px"
                        }}
                      >
                        {section.description}
                      </h1>
                      
                      {/* Description */}
                      <p 
                        style={{
                          backgroundColor: "transparent",
                          borderBottomLeftRadius: "0px",
                          borderBottomRightRadius: "0px",
                          borderTopLeftRadius: "0px",
                          borderTopRightRadius: "0px",
                          boxSizing: "border-box",
                          color: "rgba(255, 255, 255, 0.8)",
                          display: "block",
                          fontFamily: 'Geist, "Geist Placeholder", sans-serif',
                          fontFeatureSettings: "normal",
                          fontSize: "18px",
                          fontStyle: "normal",
                          fontVariationSettings: "normal",
                          fontWeight: "400",
                          height: "75.5938px",
                          letterSpacing: "normal",
                          lineHeight: "25.2px",
                          marginBlockEnd: "0px",
                          marginBlockStart: "0px",
                          marginBottom: "0px",
                          marginInlineEnd: "0px",
                          marginInlineStart: "0px",
                          marginLeft: "0px",
                          marginRight: "0px",
                          marginTop: "0px",
                          overflowWrap: "break-word",
                          paddingBottom: "0px",
                          paddingLeft: "0px",
                          paddingRight: "0px",
                          paddingTop: "0px",
                          textAlign: "left",
                          textDecorationColor: "rgba(255, 255, 255, 0.8)",
                          textDecorationLine: "none",
                          textDecorationSkipInk: "auto",
                          textDecorationStyle: "solid",
                          textDecorationThickness: "auto",
                          textTransform: "none",
                          textUnderlineOffset: "auto",
                          textWrapMode: "wrap",
                          textWrapStyle: "auto",
                          unicodeBidi: "isolate",
                          whiteSpaceCollapse: "preserve",
                          width: "586px",
                          wordBreak: "break-word",
                          WebkitFontSmoothing: "antialiased",
                          WebkitTextStrokeColor: "rgba(255, 255, 255, 0.8)",
                          WebkitTextStrokeWidth: "0px"
                        }}
                      >
                        {section.content}
                      </p>
                    </div>
                  </div>
                  
                  {/* Get started button */}
                  <div style={{ marginTop: "24px" }}>
                    <a 
                      href="./pricing"
                      className="inline-block transition-all duration-300"
                      style={{
                        borderBottomWidth: "1px",
                        borderColor: "rgba(255, 255, 255, 0.15)",
                        borderLeftWidth: "1px",
                        borderRightWidth: "1px",
                        borderStyle: "solid",
                        borderTopWidth: "1px",
                        backdropFilter: "blur(5px)",
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        borderRadius: "64px",
                        opacity: 1,
                        willChange: "auto",
                        cursor: "pointer"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backdropFilter = "blur(10px)"
                        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.25)"
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)"
                        e.currentTarget.style.transform = "translateY(-2px)"
                        e.currentTarget.style.boxShadow = "0 8px 32px rgba(255, 255, 255, 0.1)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backdropFilter = "blur(5px)"
                        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)"
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)"
                        e.currentTarget.style.transform = "translateY(0px)"
                        e.currentTarget.style.boxShadow = "none"
                      }}
                    >
                      <div 
                        style={{
                          outline: "none",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          flexShrink: 0,
                          transform: "none",
                          opacity: 1,
                          willChange: "auto",
                          height: "40px",
                          width: "112px",
                          padding: "0"
                        }}
                      >
                        <p 
                          style={{
                            color: "rgb(255, 255, 255)",
                            fontFamily: "Geist, sans-serif",
                            margin: 0,
                            fontSize: "16px",
                            fontWeight: "500"
                          }}
                        >
                          Get started
                        </p>
                      </div>
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* 오른쪽 이미지 스위치 */}
        <div className="relative">
          <ImageSwitch 
            images={DEMO_IMAGES}
            scrollSections={SCROLL_SECTIONS.length}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export { ScrollImageSwitchDemo }
