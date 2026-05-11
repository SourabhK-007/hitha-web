import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { principles } from '../constants';

gsap.registerPlugin(ScrollTrigger);



const Values = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.principle-item');
    
    // Create a master timeline linked to the pinned scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%", // Scroll distance
        pin: true,     // Keep the section fixed
        scrub:0.5,      // Smooth scrubbing
      }
    });

    items.forEach((item, index) => {
      const heading = item.querySelector('h3');
      const description = item.querySelector('.desc-wrapper');
      const line = item.querySelector('.timeline-line');

      // 1. OPEN current item
      tl.to(heading, { color: "#000", scale: 1.05, duration: 0.2 }, index)
        .to(line, { scaleY: 1, backgroundColor: "#000", duration: 0.2 }, index)
        .to(description, { height: "auto", opacity: 1, marginTop: "1rem", duration: 0.2 }, index);

      // 2. CLOSE current item (unless it's the last one)
      if (index < items.length - 1) {
        tl.to(heading, { color: "#166534", scale: 1, duration: 0.2 }, index + 0.8)
          .to(line, { scaleY: 0, backgroundColor: "#d1d5db", duration: 0.2 }, index + 0.8)
          .to(description, { height: 0, opacity: 0, marginTop: 0, duration: 0.5 }, index + 0.8);
      }
    });
  }, { scope: sectionRef });

 return (
    <section 
      ref={sectionRef} 
      // Changed flex-col to static positioning for the main container to prevent "center-jumping"
      className="w-full h-screen bg-[#fbffd3] flex items-start justify-center font-mono overflow-hidden p-10"
    >
      {/* We use a fixed-width container that won't resize its own boundaries */}
      <div className="w-full max-w-4xl  flex flex-col items-start">
        
        {/* Main Heading - Pulled out of the animation flow */}
        <h1 className="heading">Our Principles</h1>


        <div className="w-full flex flex-col">
          {principles.map((p) => (
            <div key={p.id} className="principle-item relative flex flex-col items-start border-b border-gray-300/30">
              <div className="flex items-start gap-8 w-full py-6">
                <img src={p.img} alt={p.title} width={50} height={50} className='rounded-xl' />
                
                <div className="flex-1">
                  {/* Added 'item-title' class for specific targeting */}
                  <h3 className=" font-serif item-title text-3xl md:text-5xl   tracking-tighter origin-left transition-colors">
                    {p.title}
                  </h3>

                  <div className="relative">
                    {/* The vertical timeline bar */}
                    <div className="absolute left-[-2.5rem] top-0 w-[2px] h-full bg-gray-200">
                      <div className="timeline-line w-full h-full bg-black origin-top scale-y-0" />
                    </div>

                    <div className="desc-wrapper h-0 opacity-0 overflow-hidden">
                      <p className="text-sm md:text-base leading-relaxed text-gray-600  pb-6 pt-4">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;