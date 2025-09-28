
import { motion } from 'framer-motion';

export default function OrbaiDemo() {
  return (
    <div 
      className="h-screen w-screen flex flex-col justify-center items-center relative bg-white"
    >
      
      {/* 메인 콘텐츠 */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center max-w-7xl mx-auto px-4"
      >
        
        {/* AI AUTOMATION FOR BUSINESSES 배지 */}
        <div 
          style={{
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(245, 245, 245)',
            borderBottomLeftRadius: '60px',
            borderBottomRightRadius: '60px',
            borderTopLeftRadius: '60px',
            borderTopRightRadius: '60px',
            boxShadow: '0px 0.706592px 0.706592px -0.541667px rgba(0, 0, 0, 0.1), 0px 1.80656px 1.80656px -1.08333px rgba(0, 0, 0, 0.09), 0px 3.62176px 3.62176px -1.625px rgba(0, 0, 0, 0.09), 0px 6.8656px 6.8656px -2.16667px rgba(0, 0, 0, 0.09), 0px 13.6468px 13.6468px -2.70833px rgba(0, 0, 0, 0.08), 0px 30px 30px -3.25px rgba(0, 0, 0, 0.05), 0px 3px 1px 0px rgba(255, 255, 255, 1) inset',
            boxSizing: 'border-box',
            columnGap: '8px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            fontFamily: 'sans-serif',
            fontSize: '12px',
            height: '32px',
            justifyContent: 'center',
            opacity: 1,
            overflowX: 'hidden',
            overflowY: 'hidden',
            paddingBottom: '6px',
            paddingLeft: '12px',
            paddingRight: '12px',
            paddingTop: '6px',
            position: 'relative',
            rowGap: '8px',
            unicodeBidi: 'isolate',
            width: '240.188px',
            willChange: 'auto',
            WebkitFontSmoothing: 'antialiased',
            marginBottom: '24px'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 256 256" 
            style={{
              width: '16px',
              height: '16px',
              fill: 'rgb(128, 128, 128)',
              flexShrink: 0
            }}
          >
            <path 
              d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"
              fill="currentColor"
            />
          </svg>
          <p 
            style={{
              color: 'rgb(0, 0, 0)',
              fontSize: '12px',
              fontFamily: 'Satoshi, sans-serif',
              margin: 0,
              padding: 0
            }}
          >
            AI AUTOMATION FOR BUSINESSES
          </p>
        </div>

        {/* ORB AI 로고와 제목 */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}
        >
          {/* 중첩된 로고 컨테이너 */}
          <div className="relative">
            {/* 외부 그라데이션 컨테이너 (큰 원) */}
            <div 
              style={{
                background: 'linear-gradient(180deg, rgb(14, 18, 41) -278%, rgb(255, 255, 255) 136%)',
                borderRadius: '100px',
                boxShadow: 'rgba(122, 122, 122, 0.58) 0px 0.706592px 0.989229px -0.541667px, rgba(122, 122, 122, 0.57) 0px 1.80656px 2.52919px -1.08333px, rgba(122, 122, 122, 0.55) 0px 3.62176px 5.07046px -1.625px, rgba(122, 122, 122, 0.52) 0px 6.8656px 9.61184px -2.16667px, rgba(122, 122, 122, 0.46) 0px 13.6468px 19.1055px -2.70833px, rgba(122, 122, 122, 0.32) 0px 30px 42px -3.25px',
                opacity: 1,
                width: '116px',
                height: '116px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                boxSizing: 'border-box'
              }}
            >
              {/* 내부 그라데이션 컨테이너 (작은 원) */}
              <div 
                style={{
                  background: 'linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 213%)',
                  borderRadius: '100px',
                  boxShadow: 'rgba(16, 49, 77, 0.24) 0px 0.706592px 0.706592px -0.666667px, rgba(16, 49, 77, 0.23) 0px 1.80656px 1.80656px -1.33333px, rgba(16, 49, 77, 0.22) 0px 3.62176px 3.62176px -2px, rgba(16, 49, 77, 0.2) 0px 6.8656px 6.8656px -2.66667px, rgba(16, 49, 77, 0.16) 0px 13.6468px 13.6468px -3.33333px, rgba(16, 49, 77, 0.06) 0px 30px 30px -4px',
                  opacity: 1,
                  position: 'relative',
                  width: '96px',
                  height: '96px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  boxSizing: 'border-box'
                }}
              >
                {/* 로고 이미지 (더 작게) */}
                <img 
                  decoding="auto"
                  width="64"
                  height="64"
                  sizes="64px"
                  src="https://framerusercontent.com/images/6ZRrNs4Gy2rcMzXTLB8Tl2NZ51I.svg?width=64&height=64"
                  alt="logo"
                  style={{
                    display: 'block',
                    borderRadius: 'inherit',
                    objectPosition: 'center',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* ORB AI 제목 */}
          <h1 
            className="framer-text"
            style={{
              backgroundClip: 'text',
              backgroundImage: 'linear-gradient(25deg, rgb(0, 0, 0) 34%, rgb(255, 255, 255) 124%)',
              boxSizing: 'border-box',
              color: 'transparent',
              display: 'inline-block',
              fontFamily: 'Inter, sans-serif',
              fontFeatureSettings: 'normal',
              fontSize: '100px',
              fontStyle: 'normal',
              fontVariationSettings: 'normal',
              fontWeight: '400',
              height: '120px',
              letterSpacing: '-6px',
              lineHeight: '1.05',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            ORB AI
          </h1>
        </div>

        {/* 서브타이틀 */}
        <p 
          style={{
            backgroundColor: 'transparent',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
            boxSizing: 'border-box',
            color: 'rgb(0, 0, 0)',
            display: 'block',
            fontFamily: 'Inter, sans-serif',
            fontFeatureSettings: 'normal',
            fontSize: '16px',
            fontStyle: 'normal',
            fontVariationSettings: 'normal',
            fontWeight: '400',
            height: '24px',
            letterSpacing: 'normal',
            lineHeight: '24px',
            marginBlockEnd: '0px',
            marginBlockStart: '0px',
            marginInlineEnd: '0px',
            marginInlineStart: '0px',
            marginLeft: '0px',
            marginRight: '0px',
            marginTop: '0px',
            overflowWrap: 'break-word',
            paddingBottom: '0px',
            paddingLeft: '0px',
            paddingRight: '0px',
            textAlign: 'center',
            marginBottom: '32px'
          }}
        >
          Custom AI solutions, built for the innovators of tomorrow
        </p>

        {/* CTA 버튼들 */}
        <div className="flex flex-row gap-4 justify-center items-stretch">
          {/* 메인 CTA */}
          <motion.a 
            href="https://framebase.lemonsqueezy.com/buy/ed1b4c3d-925c-4434-8a7f-de7f9cd40560"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-black text-white rounded-[10px] px-6 py-3 h-full shadow-[rgba(61,61,61,0.72)_0px_0.602187px_1.08394px_-1.25px,rgba(61,61,61,0.64)_0px_2.28853px_4.11936px_-2.5px,rgba(61,61,61,0.25)_0px_10px_18px_-3.75px,rgba(0,0,0,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(0,0,0,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(0,0,0,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(0,0,0,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(0,0,0,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(0,0,0,0.15)_0px_30px_30px_-3.5px]"
            style={{ opacity: 1, willChange: 'auto' }}
            whileHover={{ 
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              transition: { duration: 0.1 }
            }}
          >
            <div className="flex items-center gap-2" style={{ opacity: 1 }}>
              <div style={{ transform: 'none', opacity: 1 }}>
                <p 
                  className="text-white"
                  style={{
                    background: 'transparent',
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                    display: 'block',
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                    fontFeatureSettings: 'normal',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontVariationSettings: 'normal',
                    fontWeight: '500',
                    height: '22.3958px',
                    letterSpacing: 'normal',
                    lineHeight: '22.4px',
                    marginBlockEnd: '0px',
                    marginBlockStart: '0px',
                    marginBottom: '0px',
                    marginInlineEnd: '0px',
                    marginInlineStart: '0px',
                    marginLeft: '0px',
                    marginRight: '0px',
                    marginTop: '0px',
                    paddingBottom: '0px'
                  }}
                >
                  Get Template
                </p>
              </div>
              <div style={{ opacity: 1 }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 256 256" 
                  className="w-4 h-4"
                  fill="rgb(255, 255, 255)"
                  style={{ 
                    userSelect: 'none', 
                    width: '16px', 
                    height: '16px', 
                    display: 'inline-block', 
                    flexShrink: 0 
                  }}
                >
                  <g fill="rgb(255, 255, 255)">
                    <path d="M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z" />
                  </g>
            </svg>
              </div>
            </div>
          </motion.a>

          {/* 보조 CTA */}
          <motion.a 
            href="#services"
            className="inline-flex items-center justify-center rounded-[10px] px-6 py-3 h-full"
            style={{ 
              backgroundColor: 'rgb(245, 245, 245)',
              borderRadius: '10px',
              boxShadow: 'rgba(158, 158, 158, 0.69) 0px 0.706592px 0.706592px -0.583333px, rgba(158, 158, 158, 0.68) 0px 1.80656px 1.80656px -1.16667px, rgba(158, 158, 158, 0.65) 0px 3.62176px 3.62176px -1.75px, rgba(158, 158, 158, 0.61) 0px 6.8656px 6.8656px -2.33333px, rgba(158, 158, 158, 0.52) 0px 13.6468px 13.6468px -2.91667px, rgba(158, 158, 158, 0.3) 0px 30px 30px -3.5px, rgb(255, 255, 255) 0px 3px 1px 0px inset',
              opacity: 1, 
              willChange: 'auto' 
            }}
            whileHover={{ 
              backgroundColor: "rgb(250, 250, 250)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              backgroundColor: "rgb(240, 240, 240)",
              transition: { duration: 0.1 }
            }}
          >
            <div style={{ opacity: 1 }}>
              <div style={{ 
                transform: 'none', 
                opacity: 1, 
                willChange: 'auto' 
              }}>
                <p 
                  style={{
                    background: 'transparent',
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    boxSizing: 'border-box',
                    cursor: 'pointer',
                    display: 'block',
                    fontFamily: 'Inter, "Inter Placeholder", sans-serif',
                    fontFeatureSettings: 'normal',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontVariationSettings: 'normal',
                    fontWeight: '500',
                    height: '22.3958px',
                    letterSpacing: 'normal',
                    lineHeight: '22.4px',
                    marginBlockEnd: '0px',
                    marginBlockStart: '0px',
                    marginBottom: '0px',
                    marginInlineEnd: '0px',
                    marginInlineStart: '0px',
                    marginLeft: '0px',
                    marginRight: '0px',
                    marginTop: '0px',
                    paddingBottom: '0px',
                    color: 'rgb(0, 0, 0)'
                  }}
                >
                  See Our Services
                </p>
              </div>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
