import { useEffect, useRef } from "react";
import { navLinks } from "../constants/index.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  const navRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      navRef.current,
      { backgroundColor: "rgba(255,255,255,0)" },
      {
        backgroundColor: "rgba(255,255,255,1)",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "top -150",   // distance over which fade happens
          scrub: true,       // makes it smooth with scroll
        },
      }
    );
    const links = navRef.current?.querySelectorAll("a");
    if (links && links.length) {
      gsap.fromTo(
        links,
        { color: "#ffffff" },
        {
          color: "rgba(68,111,68,1)",
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "top -150",
            scrub: true,
          },
        }
      );
    }
  }, { scope: navRef });

  return (
    <header ref={navRef}>
      <nav className="px-5 md:px-10">
        <img src="images/hitha_nav.webp" alt="hitha logo" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label} className="text-shadow-green-800">
              <a className="text-shadow-green-800 font-oswald" href={`#${label.toLowerCase()}`}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;