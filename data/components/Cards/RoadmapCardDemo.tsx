import { RoadmapCard } from "../ui/roadmap-card";

export default function RoadmapCardDemo() {
  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        <RoadmapCard
          title="Product Roadmap"
          description="우리의 제품 개발 로드맵을 확인해보세요"
          items={[
            {
              quarter: "Q1 2023",
              title: "Core Platform",
              description: "기본 기능 및 사용자 관리 시스템 구축",
              status: "done",
            },
            {
              quarter: "Q2 2023",
              title: "Analytics",
              description: "리포팅 및 데이터 시각화 기능 추가",
              status: "in-progress",
            },
            {
              quarter: "Q3 2023",
              title: "Integrations",
              description: "서드파티 앱 연동 기능 개발",
              status: "upcoming",
            },
            {
              quarter: "Q4 2023",
              title: "AI Features",
              description: "스마트 자동화 및 예측 기능 구현",
              status: "upcoming",
            },
          ]}
        />
      </div>
    </div>
  );
}
