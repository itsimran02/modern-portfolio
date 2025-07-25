"use client";

import Spline from "@splinetool/react-spline";
import SkillCards from "./ui/SkillCards";

const About = () => {
  const skillData1 = ["html", "css", "react", "js"];

  const skillData2 = [
    "tailwind",
    "node",
    "mongo",
    "express",
  ];
  return (
    <div>
      <div
        className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2   md:h-[541px] gap-7"
        id="aboout"
      >
        <div
          style={{
            background: "url(/laptop.png)",
            backgroundRepeat: "no-repeat",
            border: "1px solid rgba(54, 55, 73, 0.43",
          }}
          className="w-full  md:bg-cover  rounded-xl h-[400px] md:h-auto bg-cover  bg-center flex flex-col items-end justify-end  row-span-2 md:pl-11 md:pb-[60px] pl-6 pb-11"
        >
          <h3 className="lg:text-[32px] text-[20px] font-bold font-inter ">
            I prioritize client collaboration, fostering
            open communication{" "}
          </h3>
        </div>

        <div
          className="relative rounded-xl"
          style={{
            border: "1px solid rgba(54, 55, 73, 0.43",
          }}
        >
          <div className="h-[150px]">
            <Spline
              scene="https://prod.spline.design/oam-kolCqmybCU6s/scene.splinecode"
              className="w-full h-full opacity-80 absolute object-cover"
            />
            <h3 className="lg:text-[32px] text-[20px] font-bold font-inter relative z-10 md:pt-[40px] md:pl-[35px] pt-11 pl-6">
              I’m very flexible with time zone
              communications
            </h3>
          </div>
        </div>
        <div
          className=" rounded-xl flex gap-6 px-4"
          style={{
            background:
              "linear-gradient(103deg, #04071D 16.66%, #0C0E23 81.61%)",
          }}
        >
          <div className="flex flex-col justify-center">
            <p className="font-inter font-normal lg:text-base text-sm  text-[#C1C2D3]">
              I constantly try to improve
            </p>
            <h3 className="text-[32px] font-bold font-inter">
              My tech stack
            </h3>
          </div>
          <div className="flex justify-between  overflow-scroll scrollbar-hide gap-3">
            {/* left  */}
            <div>
              <SkillCards skillData={skillData1} />
            </div>
            {/* right  */}
            <div>
              <SkillCards skillData={skillData2} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-7 md:grid md:grid-cols-3 grid-rows-2 w-full gap-4 h-[400px]">
        <div
          className=" flex-col col-span-1 row-span-1  rounded-xl flex overflow-clip items-center border relative border-[rgba(54,55,73,0.43)]"
          style={{
            background:
              "linear-gradient(103deg, #04071D 16.66%, #0C0E23 81.61%)",
          }}
        >
          <h3 className="text-2xl font-bold font-inter text-white pt-6 pl-6">
            Tech enthusiast with a passion for development.
          </h3>
          <div className="self-end h-full">
            <img
              src="/about-labal.png"
              alt="info"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="bg-amber-400 col-span-2 row-span-2 rounded-xl flex items-center justify-center border border-[rgba(54,55,73,0.43)] ">
          <div className="text-4xl font-bold text-black">
            Hi! I span 2/3 width and full height
          </div>
        </div>

        <div className="col-span-1 relative overflow-clip bg-[#06091F] row-span-1   p-6 rounded-xl flex items-center border border-[rgba(54,55,73,0.43)]">
          <h3 className="text-2xl font-bold font-inter text-white">
            Do you want to start a project together?
          </h3>
          <div className="absolute top-0 left-0">
            <img src="/about-gradient.png" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
