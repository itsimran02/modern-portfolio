"use client";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.set(buttonRef.current, {
        backgroundImage:
          "linear-gradient(90deg, #161A31 3.4%, #06091F 100%)",
      });
    }
  }, []);

  const handleMouseEnter = (): void => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        backgroundImage:
          "linear-gradient(90deg, #2A2F4A 3.4%, #1A1E38 100%)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (): void => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        backgroundImage:
          "linear-gradient(90deg, #161A31 3.4%, #06091F 100%)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-6 lg:py-32 py-16">
        <p className="font-inter font-normal text-[#E4ECFF] md:text-base text-[12px] uppercase tracking-[4px] text-center">
          Dynamic Web Magic with Next.js
        </p>
        <h1 className="font-bold xl:text-[72px] text-[48px] -tracking-[3.6px] lg:leading-[72px] leading-[48px] text-center">
          Transforming Concepts into Seamless{" "}
          <span className="text-[#CBACF9]">
            User Experiences
          </span>
        </h1>
        <h2 className="text-[#E4ECFF] font-inter font-normal text-center">
          Hi! I'm John Doe, a Next.js Developer based in
          Russia
        </h2>
        <div className="hover:p-[1px] rounded-[14px] hover:bg-gradient-to-r from-[#CBACF9] to-slate-500">
          <button
            ref={buttonRef}
            className="group flex w-full md:w-auto gap-2.5 justify-center font-inter items-center cursor-pointer text-[18px] font-medium py-5 px-10 rounded-[14px] border border-[rgba(105,113,162,0.40)] hover:border-[]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            See my work
            <ArrowRight className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
