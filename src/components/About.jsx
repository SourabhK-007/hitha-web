import React, { useRef, useState } from "react";
import { features } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useGSAP(() => {
    if (isMobile) return;
    let lastIndex = -1;
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=" + window.innerHeight * 2,
      scrub: true, 
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.min(features.length - 1, Math.floor(progress * features.length));
        if (newIndex !== lastIndex) {
          lastIndex = newIndex; setActiveIndex(newIndex);
          gsap.fromTo(videoRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4, overwrite: true });
        }
      },
    });
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-screen w-full bg-white rounded-3xl py-16 md:py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">

          <div>
            <h2 className="heading">
              About Hitha
            </h2>

            <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-xl">
              We are network orchestrators who create, capture, scale and share value
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {features.map((feature, index) => (
              <p
                key={index}
                className={`transition-all duration-500 text-lg sm:text-xl md:text-2xl ${activeIndex === index
                  ? "text-green-800 font-semibold"
                  : "text-gray-400"
                  }`}
              >
                {feature.text}
              </p>
            ))}
          </div>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
            Our approach is to integrate BFSI services, agronomic services and
            market services for our farmers. We are a team of multidisciplinary
            experts with domain expertise and love for Bharath and its farmer
            families. We are network orchestrators built in an open architecture
            collaborating with multiple stakeholders to bring out the best in
            each of them.
            <br /><br />
            We are pioneers at the niche intersection of{" "}
            <span className="text-green-800 font-oswald">Deep-tech</span>,{" "}
            <span className="text-green-800 font-oswald">Fin-tech</span> and{" "}
            <span className="text-green-800 font-oswald">Ag-tech</span>.
          </p>
        </div>

        {/* RIGHT VIDEO — Hidden on Mobile */}
        {!isMobile && (
          <div className="w-full lg:w-1/3 flex justify-center shadow-lg rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              src={features[activeIndex].video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full  lg:max-w-md h-64 md:h-80 object-cover rounded-xl shadow-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default About;