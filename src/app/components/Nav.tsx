"use client";
import { useState, useRef, useEffect, JSX } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Nav = (): JSX.Element => {
  gsap.registerPlugin(useGSAP);
  const [isActive, setIsActive] = useState<number | null>(
    null
  );
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);

  const spanRefs = useRef<HTMLSpanElement[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(
    null
  );
  const borderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    timelineRef.current = gsap.timeline();

    gsap.set(spanRefs.current, {
      scaleX: 0,
      opacity: 0,
      transformOrigin: "left center",
    });

    if (borderRef.current) {
      gsap.set(borderRef.current, {
        backgroundPosition: "0% 0%",
      });

      gsap.to(borderRef.current, {
        backgroundPosition: "200% 0%",
        duration: 3,
        ease: "none",
        repeat: -1,
      });
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current!.kill();
      }
    };
  }, []);

  useEffect(() => {
    if (!timelineRef.current) return;
    timelineRef.current!.clear();

    spanRefs.current.forEach((span, index) => {
      if (!span) return;

      if (isActive === index || hoveredIndex === index) {
        timelineRef.current!.to(span, {
          scaleX: 1,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        timelineRef.current!.to(
          span,
          {
            scaleX: 0,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          },
          "<"
        );
      }
    });
  }, [isActive, hoveredIndex]);

  const handleIsActive = (id: number): void => {
    setIsActive(id);
  };

  const handleMouseEnter = (index: number): void => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (): void => {
    setHoveredIndex(null);
  };

  const addSpanRef = (
    el: HTMLSpanElement | null,
    index: number
  ): void => {
    if (el) {
      spanRefs.current[index] = el;
    }
  };

  return (
    <div className="relative ">
      <div
        ref={borderRef}
        className="absolute inset-0 rounded-[13px] p-[1px]"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(255,255,255,0.1) 25%, 
            rgba(255,255,255,0.4) 50%, 
            rgba(255,255,255,0.1) 75%, 
            transparent 100%
          )`,
          backgroundSize: "200% 100%",
        }}
      >
        <div className="w-full h-full bg-[linear-gradient(103deg,_#04071D_16.66%,_#0C0E23_81.61%)] rounded-[12px]" />
      </div>

      <nav className=" flex justify-center items-center py-6 px-12 w-full lg:w-2/3 mx-auto sticky mt-12 rounded-[13px]">
        <div className="flex gap-8">
          {navItems.map((item, i) => (
            <div
              key={item.name}
              className="flex flex-col justify-center text-center"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                onClick={() => {
                  handleIsActive(i);
                }}
                className={`font-inter md:text-base text-sm font-medium transition-colors duration-300 ${
                  isActive === i
                    ? "text-[#fff]"
                    : "text-[#C1C2D3] hover:text-[#fff]"
                }`}
                href={item.href}
              >
                {item.name}
              </a>

              <span
                ref={(el) => addSpanRef(el, i)}
                className="h-0.5 bg-white w-full mt-1"
              ></span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
