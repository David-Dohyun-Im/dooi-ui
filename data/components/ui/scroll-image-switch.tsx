"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { cn } from "../../../lib/utils"

interface ScrollImageSwitchProps {
  children: React.ReactNode
  className?: string
}

interface ScrollContentProps {
  children: React.ReactNode
  className?: string
}

interface ImageSwitchProps {
  images: string[]
  className?: string
  scrollSections?: number
}

const ScrollImageSwitch = React.forwardRef<HTMLDivElement, ScrollImageSwitchProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ScrollImageSwitch.displayName = "ScrollImageSwitch"

const ScrollContent = React.forwardRef<HTMLDivElement, ScrollContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ScrollContent.displayName = "ScrollContent"

const ImageSwitch = React.forwardRef<HTMLDivElement, ImageSwitchProps>(
  ({ images, className, scrollSections, ...props }, ref) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
    const [isTransitioning, setIsTransitioning] = React.useState(false)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const scrollContainerRef = React.useRef<HTMLDivElement>(null)
    
    const sections = scrollSections || images.length
    
    const { scrollYProgress } = useScroll({
      target: scrollContainerRef,
      offset: ["start end", "end start"]
    })

    // 스크롤 진행도에 따라 이미지 인덱스 계산
    // 3개 섹션에 맞춰서 이미지 전환 - 마지막 이미지가 확실히 보이도록 조정
    const imageIndex = useTransform(
      scrollYProgress,
      [0, 0.25, 0.5, 1],
      [0, 0, 1, 2]
    )

    useMotionValueEvent(imageIndex, "change", (latest) => {
      const newIndex = Math.round(latest)
      console.log('Image index change:', latest, 'rounded:', newIndex, 'current:', currentImageIndex)
      if (newIndex !== currentImageIndex && newIndex >= 0 && newIndex < images.length) {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentImageIndex(newIndex)
          setTimeout(() => {
            setIsTransitioning(false)
          }, 200)
        }, 100) // 깜빡이는 효과를 위한 지연
      }
    })

    return (
      <>
        {/* 스크롤 트리거를 위한 숨겨진 컨테이너 */}
        <div 
          ref={scrollContainerRef}
          className="absolute top-0 left-0 w-full"
          style={{ height: `${sections * 100}vh` }}
        />
        
        <div
          ref={containerRef}
          className={cn("sticky top-0 h-screen flex items-center justify-center", className)}
          {...props}
        >
          <motion.div
            className="relative mx-auto"
            style={{ width: "586px", height: "564px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentImageIndex ? 1 : 0,
                  scale: index === currentImageIndex ? 1 : 0.98,
                  y: index === currentImageIndex ? 0 : 10,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* 깜빡이는 효과를 위한 오버레이 */}
                  {isTransitioning && index === currentImageIndex && (
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 0.3, 0],
                        scale: [1, 1.02, 1]
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeInOut",
                        times: [0, 0.5, 1]
                      }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </>
    )
  }
)
ImageSwitch.displayName = "ImageSwitch"

export { ScrollImageSwitch, ScrollContent, ImageSwitch }
