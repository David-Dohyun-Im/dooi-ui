
const QuoteDemo = () => {
  return (
    <section className="w-full" id="founder-note">
      <div className="w-full">
        <div className="w-full">
          {/* 인용구 텍스트 */}
          <div className="w-full">
            <h3 className="text-center text-[rgba(0,0,0,0.6)] text-[36px] font-[Satoshi-Medium] leading-[50.4px] max-w-4xl mx-auto mb-8 tracking-normal">
              "We harness <span className="text-black">your data</span>, understand your audience,<br />
              and use <span className="text-black">AI</span> to help your brand rise above the noise.<br />
              The best part? <span className="text-black">We execute</span>, too."
            </h3>
          </div>
          
          {/* 프로필 이미지와 속성 */}
          <div className="flex items-center justify-center gap-3">
            {/* 프로필 이미지 */}
            <div className="w-9 h-9 rounded-full bg-gray-300 shadow-[0_12px_24px_rgba(0,0,0,0.4)] flex items-center justify-center">
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
            </div>
            
            {/* 속성 텍스트 */}
            <div>
              <p className="text-black text-[16px] font-[Inter] leading-[24px] h-[24px] text-center font-normal tracking-normal">
                Founder of ORB AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteDemo;
