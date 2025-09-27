import React from 'react';

// Twitter 아이콘
function TwitterIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      />
    </svg>
  );
}

// GitHub 아이콘
function GitHubIcon(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FooterDemo() {
  return (
    <footer className="bg-white pt-[90px]">
      {/* 구분선 */}
      <div className="border-t border-gray-200"></div>
      
      {/* 상단 섹션 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* 로고와 회사명 */}
          <div className="flex items-center space-x-3">
            {/* 육각형 로고 */}
            <div className="w-8 h-8 border-2 border-black flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L22 7L22 17L12 22L2 17L2 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-black">Awesome Corp</span>
          </div>

          {/* 소셜 아이콘들 */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <TwitterIcon className="w-5 h-5 text-black" />
            </div>
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
              <GitHubIcon className="w-5 h-5 text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* 하단 섹션 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-6">
        <div className="flex items-center justify-between">
          {/* 저작권 정보 - 왼쪽 */}
          <div className="text-gray-600">
            <div>All rights reserved</div>
          </div>

          {/* 네비게이션 링크들 - 오른쪽 정렬, 한 줄로 */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-black hover:text-gray-600 transition-colors">
              Products
            </a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">
              About
            </a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">
              Blog
            </a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors">
              Contact
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
