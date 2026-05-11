import React from 'react'
import { services } from '../constants'
import { useMediaQuery } from 'react-responsive';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to([".left-column"], {
            scrollTrigger: {
                trigger: "#services",
                start: isMobile ? "top 90%" : "top 90%",
            },
            y: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 1,
            ease: "power2.out",
        });
    }, [isMobile]);

    return (
        <div className=" h-auto gap-4 md:h-screen flex flex-col  items-center justify-center p-4 bg-white" id='services'>
            <h1 className="heading">
                Services
            </h1>
            <div className="md:flex   md:h-[80%]    flex-row items-center justify-center space-y-2 gap-4 w-full md:w-[90%] h-[20%]">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="left-column  translate-y-20  w-full  md:w-[25%] h-full hover:w-[50%] bg-zinc-900 rounded-2xl transition-all duration-300 ease-in-out shadow-lg flex flex-col items-end justify-start p-6 cursor-pointer group relative overflow-hidden"
                    >
                        {/* 1. WRAP CONTENT IN A HIGH Z-INDEX DIV */}
                        <div className="relative z-10 w-full flex flex-col items-end">

                            {/* Title Section */}
                            <div className="text-white font-semibold flex flex-col items-end">
                                <img src={service.icon} alt={service.title} className='w-12 h-12 rounded-full' />

                                <p className="font-oswald text-4xl uppercase leading-tight text-right max-w-58 wrap-break-word">
                                    {service.title}
                                </p>
                            </div>

                            {/* Points Section */}
                            <div className="mt-8 w-[90%] md:w-[60%] opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 delay-100">
                                <ul className="text-white md:text-right text-left list-none space-y-2">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="text-lg font-light opacity-90">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 2. THE IMAGE (Ensure z-0) */}
                        <img
                            src={service.img}
                            alt={service.title}
                            className="absolute z-0 top-0 left-0 w-full h-full object-cover opacity-40 group-hover:opacity-20 transition-opacity duration-500"
                        />

                        {/* 3. OPTIONAL: DARK OVERLAY (Ensures white text is always visible) */}
                        <div className="absolute w-full inset-0 bg-black/10 z-1 group-hover:bg-black/30 transition-colors duration-500" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services;