import { FaqSectionWithCategories } from "../ui/faq-middle";

const DEMO_FAQS = [
  {
    question: "How do I get started?",
    answer: "Getting started is easy! Simply sign up for an account and follow our quick setup guide. We'll walk you through each step of the process.",
    category: "Getting Started",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    category: "Billing",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
    category: "Pricing",
  },
  {
    question: "How can I contact support?",
    answer: "Our support team is available 24/7 through our help center, email support, or live chat. We typically respond within 2 hours.",
    category: "Support",
  },
];

// 기본 FAQ 컴포넌트 (제목 없음)
export function FaqSectionWithCategoriesDemo() {
  return (
    <FaqSectionWithCategories
      title=""
      description=""
      items={DEMO_FAQS}
    />
  );
}

// Orbai 템플릿용 FAQ 컴포넌트 (커스텀 제목 포함)
export function FaqSectionWithCategoriesOrbaiDemo() {
  return (
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
            FAQs
          </span>
        </h2>
      </div>
      
      <FaqSectionWithCategories
        title=""
        description=""
        items={DEMO_FAQS}
      />
    </div>
  );
}

// 기본 스타일 FAQ 컴포넌트 (내장 제목 사용)
export function FaqSectionWithCategoriesDefaultDemo() {
  return (
    <FaqSectionWithCategories
      title="Frequently Asked Questions"
      description="Find answers to common questions about our services"
      items={DEMO_FAQS}
    />
  );
}