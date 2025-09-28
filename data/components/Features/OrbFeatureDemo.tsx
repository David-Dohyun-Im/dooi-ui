import React from 'react';

const OrbFeatureDemo = () => {
  return (
    <section className="py-20 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="mb-6">
            <span 
              className="bg-clip-text text-transparent inline-block text-center"
              style={{
                backgroundImage: 'linear-gradient(180deg, rgb(14, 28, 41) 34%, rgb(255, 255, 255) 124%)',
                fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                fontSize: '56px',
                fontWeight: 500,
                letterSpacing: '-0.56px',
                lineHeight: '67.2px',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              All features in 1 tool
            </span>
          </h2>
          
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px'
            }}
          >
            Discover features that simplify workflows & grow your business.
          </p>
        </div>

        {/* Features Container - 1200x560 */}
        <div 
          className="mx-auto flex flex-col"
          style={{
            width: '1200px',
            height: '560px',
            gap: '24px'
          }}
        >
          {/* Top Row Container */}
          <div 
            className="flex"
            style={{
              width: '1200px',
              height: '268px',
              gap: '24px'
            }}
          >
            {/* Top Left - Image + Text Card */}
            <div 
              className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200 flex flex-row"
              style={{
                width: '705.6px',
                height: '268px',
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset'
              }}
            >
            {/* Image Section - 336x228 */}
            <div 
              className="relative rounded-2xl overflow-hidden m-2"
              style={{
                width: '336px',
                height: '228px',
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px'
              }}
            >
              <img 
                src="https://framerusercontent.com/images/jt6hxbLaCBNrS66LsJbeYLxd4no.png?width=1200&height=1200" 
                alt="AI Technology" 
                className="w-full h-full object-cover block"
                style={{ borderRadius: 'inherit' }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(50% 100% at -5.4% 35.5%, rgba(240, 248, 255, 0.9) 0%, rgba(4, 7, 13, 0) 100%)',
                  borderRadius: 'inherit',
                  opacity: 0.3
                }}
              ></div>
            </div>
            
            {/* Content Section - 336x228 */}
            <div 
              className="p-6 flex items-center"
              style={{
                width: '336px',
                height: '228px'
              }}
            >
              <div className="w-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-3">
                  <div 
                    className="w-8 h-8 bg-gradient-to-b from-black to-white rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 170%)',
                      boxShadow: 'rgba(171, 171, 171, 0.64) 0px 0.706592px 0.706592px -0.541667px, rgba(171, 171, 171, 0.63) 0px 1.80656px 1.80656px -1.08333px, rgba(171, 171, 171, 0.61) 0px 3.62176px 3.62176px -1.625px, rgba(171, 171, 171, 0.58) 0px 6.8656px 6.8656px -2.16667px, rgba(171, 171, 171, 0.51) 0px 13.6468px 13.6468px -2.70833px, rgba(171, 171, 171, 0.35) 0px 30px 30px -3.25px'
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 256 256" 
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      style={{ userSelect: 'none', flexShrink: 0 }}
                    >
                      <path d="M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.47,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A302.47,302.47,0,0,0,141.27,70C172.15,49,196.91,43.81,204.55,51.45Zm-153.1,0c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.19,51.45,204.55ZM128,140a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm76.55,64.56c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55Z"></path>
                    </svg>
                  </div>
                  Cutting-Edge AI
                </h3>
                <p className="text-gray-600 leading-relaxed opacity-80">
                  Deploy AI solutions that adapt quickly, learn fast, and scale with your business needs.
                </p>
              </div>
            </div>
            </div>

            {/* Top Right - Text Only Card */}
            <div 
              className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200"
              style={{
                width: '470px',
                height: '268px',
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset'
              }}
            >
            <div className="p-6 h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-3">
                <div 
                  className="w-8 h-8 bg-gradient-to-b from-black to-white rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 170%)',
                    boxShadow: 'rgba(171, 171, 171, 0.64) 0px 0.706592px 0.706592px -0.541667px, rgba(171, 171, 171, 0.63) 0px 1.80656px 1.80656px -1.08333px, rgba(171, 171, 171, 0.61) 0px 3.62176px 3.62176px -1.625px, rgba(171, 171, 171, 0.58) 0px 6.8656px 6.8656px -2.16667px, rgba(171, 171, 171, 0.51) 0px 13.6468px 13.6468px -2.70833px, rgba(171, 171, 171, 0.35) 0px 30px 30px -3.25px'
                  }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 256 256" 
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    style={{ userSelect: 'none', flexShrink: 0 }}
                  >
                    <path d="M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path>
                  </svg>
                </div>
                Automated Workflows
              </h3>
              <p className="text-gray-600 leading-relaxed opacity-80">
                Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams and projects.
              </p>
            </div>
            </div>
          </div>

          {/* Bottom Row Container */}
          <div 
            className="flex"
            style={{
              width: '1200px',
              height: '268px',
              gap: '24px'
            }}
          >
            {/* Bottom Left - Text Only Card */}
            <div 
              className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200"
              style={{
                width: '470px',
                height: '268px',
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset'
              }}
            >
            <div className="p-6 h-full flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-3">
                <div 
                  className="w-8 h-8 bg-gradient-to-b from-black to-white rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 170%)',
                    boxShadow: 'rgba(171, 171, 171, 0.64) 0px 0.706592px 0.706592px -0.541667px, rgba(171, 171, 171, 0.63) 0px 1.80656px 1.80656px -1.08333px, rgba(171, 171, 171, 0.61) 0px 3.62176px 3.62176px -1.625px, rgba(171, 171, 171, 0.58) 0px 6.8656px 6.8656px -2.16667px, rgba(171, 171, 171, 0.51) 0px 13.6468px 13.6468px -2.70833px, rgba(171, 171, 171, 0.35) 0px 30px 30px -3.25px'
                  }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 256 256" 
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    style={{ userSelect: 'none', flexShrink: 0 }}
                  >
                    <path d="M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z"></path>
                  </svg>
                </div>
                Insightful Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed opacity-80">
                Gain deep, real-time data insights with advanced AI analytics to guide smarter strategies, decisions, and scalable business growth.
              </p>
            </div>
            </div>

            {/* Bottom Right - Image + Text Card */}
            <div 
              className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200 flex flex-row"
              style={{
                width: '705.6px',
                height: '268px',
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset'
              }}
            >
            {/* Image Section - 336x228 */}
            <div 
              className="relative rounded-2xl overflow-hidden m-2"
              style={{
                width: '336px',
                height: '228px',
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px'
              }}
            >
              <img 
                src="https://framerusercontent.com/images/NUbGSZcPrAH7CFfBazSJOsGIP4.png?width=800&height=1200" 
                alt="AI Support" 
                className="w-full h-full object-cover block"
                style={{ borderRadius: 'inherit' }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(50% 100% at -5.4% 35.5%, rgba(240, 248, 255, 0.9) 0%, rgba(4, 7, 13, 0) 100%)',
                  borderRadius: 'inherit',
                  opacity: 0.3
                }}
              ></div>
            </div>
            
            {/* Content Section - 336x228 */}
            <div 
              className="p-6 flex items-center"
              style={{
                width: '336px',
                height: '228px'
              }}
            >
              <div className="w-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-3">
                  <div 
                    className="w-8 h-8 bg-gradient-to-b from-black to-white rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 170%)',
                      boxShadow: 'rgba(171, 171, 171, 0.64) 0px 0.706592px 0.706592px -0.541667px, rgba(171, 171, 171, 0.63) 0px 1.80656px 1.80656px -1.08333px, rgba(171, 171, 171, 0.61) 0px 3.62176px 3.62176px -1.625px, rgba(171, 171, 171, 0.58) 0px 6.8656px 6.8656px -2.16667px, rgba(171, 171, 171, 0.51) 0px 13.6468px 13.6468px -2.70833px, rgba(171, 171, 171, 0.35) 0px 30px 30px -3.25px'
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 256 256" 
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      style={{ userSelect: 'none', flexShrink: 0 }}
                    >
                      <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z"></path>
                    </svg>
                  </div>
                  AI-Powered Support
                </h3>
                <p className="text-gray-600 leading-relaxed opacity-80">
                  Enhance customer experience with AI-driven virtual assistants available for support and engagement.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OrbFeatureDemo;