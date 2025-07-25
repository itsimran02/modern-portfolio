"use client";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Button from "./Button";
// import Spline from "@splinetool/react-spline";

const Hero = () => {
  gsap.registerPlugin(useGSAP);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (headingRef.current) {
      const splitText = new SplitText(headingRef.current, {
        type: "chars,words",
        charsClass: "char",
        wordsClass: "word",
      });

      gsap.from(splitText.chars, {
        opacity: 0,
        y: 50,
        // filter: "blur(20px)",
        rotationX: -90,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.02,
      });
    }
  }, []);

  return (
    <div>
      {/* main code  */}
      <div className="flex flex-col justify-center items-center gap-6 lg:py-32 py-16">
        <p className="font-inter font-normal text-[#E4ECFF] md:text-base text-[12px] uppercase tracking-[4px] text-center">
          Dynamic Web Magic with Next.js
        </p>
        <h1
          ref={headingRef}
          className="font-bold xl:text-[72px] text-[48px] -tracking-[3.6px] lg:leading-[72px] leading-[48px] text-center"
        >
          Transforming Concepts into Seamless{" "}
          <span className="text-[#CBACF9]">
            User Experiences
          </span>
        </h1>
        <h2 className="text-[#E4ECFF] font-inter font-normal text-center">
          Hi! i am imran, a Frontend Developer based in
          india
        </h2>
        <a href="#work">
          <Button>See my work</Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
