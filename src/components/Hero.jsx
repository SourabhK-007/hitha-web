
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {

    const heroRef = useRef(null);
    const iconRef = useRef(null);

    useGSAP(() => {
     

        const tl = gsap.timeline();

        tl.from(iconRef.current, {
            y: 80,
            opacity: 0,
            duration: 1
        })
            .from(".hero-title", {
                y: 40,
                opacity: 0,
                duration: 0.8
            }, "-=0.4")
            .from(".hero-desc", {
                y: 30,
                opacity: 0,
                duration: 0.8
            }, "-=0.4");
    });
    return (
        <section ref={heroRef} id="home" className="relative w-full  overflow-hidden">
            <Helmet>
                <title>Hitha Agri Fintech</title>
                <meta name="description" content="Every farmer deserves to live a better quality of life. 
                We craft and create tools and techniques by which farmers can live a better quality of life. 
                We are dedicated to being the ‘first-choice’, wealth management platform for farmers. 
                We provide farmer-centric solutions. Small and marginal farmers are our priority." />

                <meta name="keywords" content="farmer, farmers, agronomic, financial services, markets, cropping, agriculture,
                community-supported, crop health, farm, productivity" />
                <link rel="canonical" href="https://hitha.farm/" />
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Hitha" />
                <meta property="og:description" content="Farmer’s passport to prosperity." />
                <meta property="og:image" content="https://hitha.farm//hithaLogo.png" />
                <meta property="og:url" content="https://hitha.farm/" />
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="relative w-full h-screen overflow-hidden">

                {/* Background Video */}
                <video
                    autoPlay
                    preload="metadata"
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/65"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col md:col-center items-center justify-between pb-20 h-full px-6 text-white">

                    <div>

                    </div>
                    <div className="md:medium space-y-3 flex flex-col justify-center items-center">
                        <img
                            src="/images/logo.webp"
                            alt="Hero"
                            ref={iconRef}
                            fetchPriority="high"
                            className="w-64 md:w-140 mb-6 md:mb-0 md:mr-10 drop-shadow-2xl"
                        />


                        {/* Text */}
                        <h3 className="hero-title font-oswald text-2xl md:text-4xl text-center max-w-3xl wrap-break-word">
                            A farmer’s passport to prosperity
                        </h3>
                    </div>
                    {/* Image */}


                    <p
                        className=" hero-desc md:medium max-w-2xl text-center">
                        We craft and create tools and techniques by which farmers can live the better
                        quality of life that they deserve. We are dedicated to being the ‘first-choice’,
                        wealth management platform for farmers, making it accessible to small and marginal farmers.
                    </p>


                </div>
            </div>
        </section>

    );
};

export default Hero;