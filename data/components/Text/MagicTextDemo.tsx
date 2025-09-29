import React from 'react';
import { MagicText } from "@/data/components/ui/magic-text"

const MagicTextDemo = () => {
  const fullText = "Scroll to see the magic happen. Watch as text transforms from gray to white. Experience the power of interactive design.\n\nDiscover the beauty of smooth transitions. Feel the rhythm of scrolling animations. Create memorable user experiences.\n\nTransform your ideas into reality. Build with confidence and style. Make every interaction count.";

  return (
    <section className="w-full min-h-screen bg-black flex flex-col items-center justify-center py-20 px-4" id="magic-text-demo">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-left text-[36px] font-[Geist] leading-[50.4px] tracking-normal text-white">
          <MagicText text={fullText} />
        </div>
      </div>
    </section>
  );
};

export { MagicTextDemo };