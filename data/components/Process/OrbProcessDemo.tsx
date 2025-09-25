import React from 'react';

const OrbProcessDemo = () => {
  return (
    <section className="py-10 px-4 bg-white" id="process">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-center mb-6" style={{
            backgroundClip: 'text',
            backgroundImage: 'linear-gradient(0deg, #222 34%, #7c7c7c 124%)',
            boxSizing: 'border-box',
            color: 'transparent',
            display: 'inline-block',
            fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
            fontSize: '56px',
            fontWeight: '500',
            height: '67.2005px',
            letterSpacing: '-0.56px',
            lineHeight: '67.2px',
            overflowWrap: 'break-word',
            textAlign: 'center',
            textDecorationSkipInk: 'auto',
            textTransform: 'none',
            textUnderlineOffset: 'auto',
            textWrapMode: 'wrap',
            textWrapStyle: 'auto',
            whiteSpaceCollapse: 'preserve',
            width: '439.44px',
            wordBreak: 'break-word',
            WebkitFontSmoothing: 'antialiased',
            WebkitTextFillColor: 'transparent',
            WebkitTextStrokeColor: 'transparent',
            WebkitTextStrokeWidth: '0px'
          }}>
            Simple & Scalable
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A transparent process of collaboration and feedback
          </p>
        </div>

        {/* Process Steps - 2컬럼 레이아웃 (왼쪽 1개, 오른쪽 2개) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[1150px]">
          {/* 왼쪽 - Step 1 */}
          <div className="h-full">
            <div className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col overflow-hidden">
              {/* 글 부분 + 이미지 통합 */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-b from-black to-white rounded-lg shadow-lg flex items-center justify-center mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                    >
                      <path d="M21 8c-1.45 0-2.26 1.44-1.93 2.51l-3.55 3.56c-.3-.09-.74-.09-1.04 0l-2.55-2.55C12.27 10.45 11.46 9 10 9c-1.45 0-2.27 1.44-1.93 2.52l-4.56 4.55C2.44 15.74 1 16.55 1 18c0 1.1.9 2 2 2 1.45 0 2.26-1.44 1.93-2.51l4.55-4.56c.3.09.74.09 1.04 0l2.55 2.55C12.73 16.55 13.54 18 15 18c1.45 0 2.27-1.44 1.93-2.52l3.56-3.55c1.07.33 2.51-.48 2.51-1.93 0-1.1-.9-2-2-2z" />
                      <path d="M15 9l.94-2.07L18 6l-2.06-.93L15 3l-.92 2.07L12 6l2.08.93zM3.5 11L4 9l2-.5L4 8l-.5-2L3 8l-2 .5L3 9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Workflow Assessment
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We begin by examining your existing workflows to identify where AI can deliver the greatest impact.
                  </p>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-full h-px bg-gray-300 opacity-15"></div>
                  <div className="flex items-center gap-2 ml-4">
                    <h2 className="text-2xl font-bold text-gray-900">01</h2>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                      <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                    </div>
                  </div>
                </div>
                
                {/* 이미지 - 글 박스 안의 빈 공간 */}
                <div className="flex-1 relative rounded-2xl overflow-hidden">
                  <img 
                    src="https://framerusercontent.com/images/I11kmPYZO5IptYaE3LYgilI1Xk.jpeg?width=1200&height=800" 
                    alt="Workflow Assessment"
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '1200/800' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽 - Step 2 & 3 (위아래로 스택) */}
          <div className="flex flex-col gap-4 h-full">
            {/* Step 2 */}
            <div className="flex-1 h-full">
              <div className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col overflow-hidden">
                {/* 글 부분 + 이미지 통합 */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-b from-black to-white rounded-lg shadow-lg flex items-center justify-center mb-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                      >
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Deploy with Confidence
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team develops custom AI systems built around your goals, ensuring safe and reliable deployment.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-full h-px bg-gray-300 opacity-15"></div>
                    <div className="flex items-center gap-2 ml-4">
                      <h2 className="text-2xl font-bold text-gray-900">02</h2>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 이미지 - 글 박스 안의 빈 공간 */}
                  <div className="h-[450px] relative rounded-2xl overflow-hidden">
                    <img 
                      src="https://framerusercontent.com/images/ozpQ1n5ntn1iNwWiM7StpAZO2IM.jpeg?scale-down-to=1024" 
                      alt="Deploy with Confidence"
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: '800/1200' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex-1 h-full">
              <div className="bg-gray-100 rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col overflow-hidden">
                {/* 글 부분 + 이미지 통합 */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-b from-black to-white rounded-lg shadow-lg flex items-center justify-center mb-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                      >
                        <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z" />
                        <circle cx="9" cy="13" r="1" />
                        <circle cx="15" cy="13" r="1" />
                        <path d="M18 11.03C17.52 8.18 15.04 6 12.05 6c-3.03 0-6.29 2.51-6.03 6.45 2.47-1.01 4.33-3.21 4.86-5.89 1.31 2.63 4 4.44 7.12 4.47z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Ongoing Support & Optimization
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      After deployment, we provide support and refine your AI systems to keep them performing at their best.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-full h-px bg-gray-300 opacity-15"></div>
                    <div className="flex items-center gap-2 ml-4">
                      <h2 className="text-2xl font-bold text-gray-900">03</h2>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                        <div className="w-2 h-2 bg-black rounded-full opacity-35"></div>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 이미지 - 글 박스 안의 빈 공간 */}
                  <div className="h-[450px] relative rounded-2xl overflow-hidden">
                    <img 
                      src="https://framerusercontent.com/images/rL2mn1WNvlJqhxa5RfsgWqkaxg.png?width=800&height=1015" 
                      alt="Ongoing Support & Optimization"
                      className="w-full h-full object-cover"
                      style={{ aspectRatio: '800/1015' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrbProcessDemo;
