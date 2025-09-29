# Scroll Image Switch Component

스크롤에 따라 왼쪽은 내용이 바뀌고, 오른쪽은 이미지가 깜빡이면서 바뀌는 효과를 제공하는 컴포넌트입니다.

## 주요 특징

- **스크롤 기반 이미지 전환**: 스크롤 진행도에 따라 이미지가 자동으로 전환됩니다
- **깜빡이는 효과**: 이미지 전환 시 깜빡이는 애니메이션 효과
- **완전한 동기화**: 왼쪽 스크롤 컨텐츠와 오른쪽 이미지가 완벽하게 동기화됩니다
- **반응형 디자인**: 모바일과 데스크톱에서 모두 작동합니다

## 사용법

### 기본 사용법

```tsx
import { ImageSwitch } from "../ui/scroll-image-switch"

const MyComponent = () => {
  const images = [
    "image1.jpg",
    "image2.jpg", 
    "image3.jpg",
    "image4.jpg"
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* 왼쪽 스크롤 컨텐츠 */}
        <div className="relative">
          <div className="p-8 md:p-12 space-y-0">
            {[1, 2, 3, 4].map((section, index) => (
              <div
                key={section}
                className="space-y-4 flex flex-col justify-center"
                style={{ minHeight: "100vh" }} // 중요: 각 섹션은 100vh 높이여야 함
              >
                <h1>Section {section}</h1>
                <p>Your content here...</p>
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
```

## Props

### ImageSwitch

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `string[]` | - | 이미지 URL 배열 (필수) |
| `scrollSections` | `number` | `images.length` | 스크롤 섹션 수 |
| `className` | `string` | - | 추가 CSS 클래스 |

## 중요 사항

1. **섹션 높이**: 왼쪽의 각 섹션은 반드시 `100vh` 높이를 가져야 합니다
2. **섹션 수 동기화**: `scrollSections` prop은 왼쪽 섹션 수와 일치해야 합니다
3. **이미지 최적화**: 이미지는 적절한 크기로 최적화되어야 합니다
4. **반응형**: 모바일에서는 그리드 레이아웃이 세로로 변경됩니다

## 예제

완전한 예제는 `ScrollImageSwitchDemo.tsx`와 `ScrollImageSwitchExample.tsx`를 참고하세요.

## 의존성

- `framer-motion`: 애니메이션 효과
- `tailwindcss`: 스타일링
