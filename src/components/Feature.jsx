import React, { Suspense, useEffect, useRef } from 'react'
import StudioLights from './SpotLight.jsx'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
// import SugarModel from '../../public/models/Sugar.jsx'
import gsap from 'gsap'
import { facts } from '../constants/index.js'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CornModel from './Corn.jsx'



gsap.registerPlugin(ScrollTrigger);

const ModelScroll = () => {
    const groupRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const scale = isMobile ? 1 : 2

    useGSAP(() => {
        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true,
            }
        });
//gsap
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top center',
                end: 'bottom top',
                scrub: 1,
            }
        });

        if (groupRef.current) {
            modelTimeline.to(groupRef.current.rotation, {
                y: Math.PI * 2,
                ease: "power1.inOut"
            });
        }

        // hide boxes initially
        gsap.set(".box", { opacity: 0, y: 50 });

        // animate boxes sequentially
        timeline
            .to(".box1", { opacity: 1, y: 0 })
            .to(".box2", { opacity: 1, y: 0 })
            .to(".box3", { opacity: 1, y: 0 })
            .to(".box4", { opacity: 1, y: 0 })
            .to(".box5", { opacity: 1, y: 0 });

    });
    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-black text-3xl uppercase border-2 border-amber-400">Loading...</h1></Html>}>
                <CornModel scale={scale} position={[0, -2, 0]} />
            </Suspense>
        </group>
    )
}

const Features = () => {

    return (
        <section id='features' >
            <h2 className='heading'>Curious? Discover the Science of Corn Growth</h2>
            <Canvas
                id="f-canvas"
                className="w-full h-[80%] "
                camera={{ position: [0, 0, 10], fov: 45 }}
            >
                <StudioLights />
                <ambientLight intensity={0.5} />
                <ModelScroll />
            </Canvas>
            <div className='absolute inset-0'>
                {
                    facts.map((feature, index) => (
                        <div className={clsx('box', `box${index + 1}`, feature.styles)} key={feature.id}>
                            <img src={feature.icon} alt={feature.highlight} className='w-16 h-16' />
                            <p>
                                <span className="text-black font-oswald">{feature.highlight}</span>
                                <span> </span><span className='font-oswald text-gray-400'>{feature.text}</span>
                            </p>
                        </div>
                    ))

                }
            </div>
        </section>
    )
}
export default Features
