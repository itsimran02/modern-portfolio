"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const CustomCursor = () => {
  const cursorCustom = useRef<HTMLDivElement | null>(null);
  const cursorFollower = useRef<HTMLDivElement | null>(
    null
  );

  useGSAP(() => {
    if (!cursorCustom.current || !cursorFollower.current)
      return;

    const moveCursor = (e: MouseEvent): void => {
      gsap.to(cursorFollower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(cursorCustom.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    gsap.set(
      [cursorFollower.current, cursorCustom.current],
      {
        xPercent: -50,
        yPercent: -50,
      }
    );

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = "none";

    if (cursorCustom.current)
      cursorCustom.current.style.display = "block";
    if (cursorFollower.current)
      cursorFollower.current.style.display = "block";

    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div className="max-lg:hidden">
      <div
        ref={cursorFollower}
        className="
          follower 
          w-[20px] 
          h-[20px] 
          rounded-full 
          bg-transparent 
          border-white 
          border-2 
          border-solid 
          fixed 
          top-0 
          left-0
          z-[9999] 
          mix-blend-difference 
          pointer-events-none
          hidden
        "
      />

      <div
        ref={cursorCustom}
        className="
          cursor-custom 
         size-[50px]
          rounded-full 
          bg-white 
          border-white 
          border-2 
          border-solid 
          fixed 
          top-0 
          left-0
          z-[9999] 
          mix-blend-difference 
          pointer-events-none
          hidden
        "
      />
    </div>
  );
};

export default CustomCursor;
