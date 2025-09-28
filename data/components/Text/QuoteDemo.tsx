
import { motion } from 'framer-motion';

const QuoteDemo = () => {
  const text = "We harness your data, understand your audience, and use AI to help your brand rise above the noise. The best part? We execute, too.";
  const words = text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.077, // 0.1 / 1.3 = 0.077
        delayChildren: 0.154, // 0.2 / 1.3 = 0.154
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.615, // 0.8 / 1.3 = 0.615
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full" id="founder-note">
      <div className="w-full">
        <div className="w-full">
          {/* 인용구 텍스트 */}
          <div className="w-full">
            <motion.h3 
              className="text-center text-[rgba(0,0,0,0.6)] text-[36px] font-[Satoshi-Medium] leading-[50.4px] max-w-4xl mx-auto mb-8 tracking-normal"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="text-[rgba(0,0,0,0.6)]">"</span>
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="inline-block mr-2"
                >
                  {word === "your" || word === "data" || word === "AI" || word === "We" || word === "execute" ? (
                    <span className="text-black">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
              <span className="text-[rgba(0,0,0,0.6)]">"</span>
            </motion.h3>
          </div>
          
          {/* 프로필 이미지와 속성 */}
          <motion.div 
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            {/* 프로필 이미지 */}
            <motion.div 
              className="w-9 h-9 rounded-full bg-gray-300 shadow-[0_12px_24px_rgba(0,0,0,0.4)] flex items-center justify-center"
              initial={{ scale: 0.8, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            >
              <div className="w-7 h-7 rounded-full overflow-hidden">
                <img 
                  decoding="auto"
                  width="4000" 
                  height="4000" 
                  sizes="28px"
                  srcSet="https://framerusercontent.com/images/W7xYkGKzPzvnPv58ZBNzxS3JZI.jpg?scale-down-to=512&width=4000&height=4000 512w,https://framerusercontent.com/images/W7xYkGKzPzvnPv58ZBNzxS3JZI.jpg?scale-down-to=1024&width=4000&height=4000 1024w,https://framerusercontent.com/images/W7xYkGKzPzvnPv58ZBNzxS3JZI.jpg?scale-down-to=2048&width=4000&height=4000 2048w,https://framerusercontent.com/images/W7xYkGKzPzvnPv58ZBNzxS3JZI.jpg?width=4000&height=4000 4000w"
                  src="https://framerusercontent.com/images/W7xYkGKzPzvnPv58ZBNzxS3JZI.jpg?width=4000&height=4000" 
                  alt="user pic" 
                  className="block w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
            
            {/* 속성 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            >
              <p className="text-black text-[16px] font-[Inter] leading-[24px] h-[24px] text-center font-normal tracking-normal">
                Founder of ORB AI
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteDemo;
