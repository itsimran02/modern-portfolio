import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const Button = ({ children }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useGSAP(() => {
    if (buttonRef.current) {
      gsap.set(buttonRef.current, {
        backgroundImage:
          "linear-gradient(90deg, #161A31 3.4%, #06091F 100%)",
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 100,
        filter: "blur(20px)",
        duration: 2,
        ease: "back.out",
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
    <div className="hover:p-[1px] rounded-[14px] hover:bg-gradient-to-r from-[#CBACF9] to-slate-500">
      <button
        ref={buttonRef}
        className="group flex w-full md:w-auto gap-2.5 justify-center font-inter items-center cursor-pointer text-[18px] font-medium py-5 px-10 rounded-[14px] border border-[rgba(105,113,162,0.40)] hover:border-[]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <ArrowRight className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-[-90deg]" />
      </button>
    </div>
  );
};

export default Button;
