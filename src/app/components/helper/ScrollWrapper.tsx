"use client";
import { useEffect, ReactNode } from "react";
import { gsap } from "gsap";

import { ScrollSmoother } from "gsap/ScrollSmoother";

import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  children: ReactNode;
}

const SmoothScrollWrapper = ({ children }: Props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScrollWrapper;
