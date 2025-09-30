import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: "FinFlow",
    description: "FinFlow needed an expense tracking platform for startup teams with tight budgets. Existing tools were too complex, so I designed an MVP to provide real-time spending insights for growth and fundraising.",
    tags: ["SaaS", "UX", "UI", "AI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=491&h=283&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "LaunchPad",
    description: "LaunchPad wanted a website builder for founders without coding skills. I designed an intuitive platform for creating MVP landing pages and marketing sites to establish online presence quickly.",
    tags: ["UI", "UX"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=491&h=283&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "HealthSync",
    description: "HealthSync aimed to provide startup teams accessible telehealth for overwhelmed employees. Traditional healthcare was slow and inaccessible, so I designed an app connecting teams to virtual care, supporting startup wellness.",
    tags: ["Product Design"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=491&h=283&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "TalentBridge",
    description: "TalentBridge aimed to create a hiring platform for startups scaling from 5 to 50 employees. I designed a solution to simplify recruitment while ensuring quality hires, addressing the unique needs of fast-growing teams.",
    tags: ["SaaS", "Visual Design"],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=491&h=283&fit=crop&crop=center"
  }
];

const DesignInActionDemo = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <span 
              style={{
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontSize: '56px',
                fontWeight: 100,
                color: '#0E1C29',
                letterSpacing: '-0.56px',
                lineHeight: '67.2px',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              Design in action
            </span>
          </motion.h2>
          
        </div>

        {/* Features Grid - 2x2 */}
        <div 
          className="mx-auto"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 504px)',
            gridTemplateRows: 'repeat(2, 589px)',
            gap: '24px',
            width: '1032px', // 504 * 2 + 24
            height: '1202px' // 589 * 2 + 24
          }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col relative group cursor-pointer"
              style={{
                width: '504px',
                height: '589px',
                padding: '20px',
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset'
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.2 + (index * 0.1)
              }}
            >
              {/* Image Section */}
              <div 
                className="relative rounded-2xl overflow-hidden mb-10 group"
                style={{
                  width: '464px', // 504 - 40 (padding)
                  height: '283px'
                }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="transition-transform duration-300 ease-out group-hover:scale-105"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Title */}
              <h3 
                className="mb-4"
                style={{
                  fontSize: '24px',
                  fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                  fontWeight: '100',
                  color: '#121212',
                  lineHeight: '32px'
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p 
                className="mb-10"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif',
                  color: '#6D6D6D',
                  lineHeight: '24px',
                  flex: 1
                }}
              >
                {feature.description}
              </p>

              {/* Tags */}
              <div 
                className="flex flex-wrap gap-2"
                style={{
                  marginTop: 'auto'
                }}
              >
                {feature.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: '#2D2D2D',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: '500'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Button - 우측 하단 */}
              <div 
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                style={{
                  width: '38.4px', // 48 * 0.8
                  height: '38.4px' // 48 * 0.8
                }}
              >
                <button
                  className="w-full h-full rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200 ease-out"
                  style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignInActionDemo;
