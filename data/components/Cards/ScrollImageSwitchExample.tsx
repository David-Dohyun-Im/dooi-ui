import { ImageSwitch } from "../ui/scroll-image-switch"

// 사용 예제
const ScrollImageSwitchExample = () => {
  // 실제 이미지 URL들을 여기에 넣으세요 (600x600 크기)
  const images = [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=600&fit=crop"
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* 왼쪽 스크롤 컨텐츠 */}
        <div className="relative">
          <div className="p-8 md:p-12 space-y-0">
            {/* 각 섹션은 100vh 높이를 가져야 합니다 */}
            {[1, 2, 3, 4].map((section, index) => (
              <div
                key={section}
                className="space-y-4 flex flex-col justify-center"
                style={{ minHeight: "100vh" }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>⭐</span>
                  <span>Section {section}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Your content here
                </h1>
                <p className="text-lg text-gray-300 max-w-lg">
                  This is where your content goes. Each section should be 100vh tall for proper synchronization.
                </p>
                <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors w-fit">
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 오른쪽 이미지 스위치 */}
        <div className="relative">
          <ImageSwitch 
            images={images}
            scrollSections={4} // 왼쪽 섹션 수와 일치해야 함
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export { ScrollImageSwitchExample }
