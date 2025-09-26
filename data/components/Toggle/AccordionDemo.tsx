import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/data/components/ui/accordion-1';
import { motion } from 'framer-motion';

export default function AccordionDemo() {
  return (
    <section className="w-full py-20 bg-white" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
      <div className="max-w-[1990px] mx-auto w-full">
        <div className="mb-16">
          <p className="text-[16px] font-medium text-black font-['Manrope'] mb-4">Services</p>
        </div>
        
        <Accordion type="single" collapsible className="w-[1800px] space-y-0" indicator="arrow">
          <AccordionItem value="branding" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 hover:no-underline group">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[40px] font-medium text-black font-['Manrope'] leading-[56px] h-[56px] cursor-pointer">Branding</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  Logo Design
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  Brand Guidelines
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  Collateral Design
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                >
                  Rebranding Services
                </motion.button>
              </motion.div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ux-ui" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 hover:no-underline group">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[40px] font-medium text-black font-['Manrope'] leading-[56px] h-[56px] cursor-pointer">UX/UI Designs</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  User Research and Analysis
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  Wireframing and Prototyping
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  User Interface Design
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                >
                  User Experience Testing
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  Responsive Design Solutions
                </motion.button>
              </motion.div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="motion" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 hover:no-underline group">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[40px] font-medium text-black font-['Manrope'] leading-[56px] h-[56px] cursor-pointer">Motion & Animation</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  Motion Graphics Design
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  Animated Explainer Videos
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  Interactive Presentations
                </motion.button>
              </motion.div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mobile" className="border-b border-gray-200">
            <AccordionTrigger className="py-6 hover:no-underline group">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[40px] font-medium text-black font-['Manrope'] leading-[56px] h-[56px] cursor-pointer">Mobile</h1>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  iOS App Development
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  Android App Development
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  App Prototyping and Testing
                </motion.button>
                <motion.button 
                  className="text-[24px] font-medium text-black font-['Manrope'] leading-[33.6px] h-[33.6px] cursor-pointer block text-left"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                >
                  App Maintenance and Updates
                </motion.button>
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
