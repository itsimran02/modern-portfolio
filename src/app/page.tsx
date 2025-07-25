import Image from "next/image";
import { spotlight } from "./assets";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";

import Project from "./components/Project";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <div className="relative overflow-x-clip">
        <div className="absolute top-0 left-0 -z-10">
          <Image
            src={spotlight}
            alt="alt"
            width={800}
            height={600}
          />
        </div>
        <div className="absolute top-0 right-[0] -z-10 scale-x-[-1]">
          <Image
            src={spotlight}
            alt="alt"
            width={800}
            height={600}
          />
        </div>
        <div className="h-0 w-full relative top-0 left-0 ">
          <img
            src="/section-grid.svg"
            alt="section-grid"
            className="h-[800px] max-w-none object-cover w-full  "
          />
        </div>
        <div className="relative max-w-[1200px] px-4 lg:px-5 mx-auto">
          <div className="sticky lg:top-6 top-4 left-0  z-10  bg-opacity-20 backdrop-blur-md">
            <Nav />
          </div>
          <Hero />
          <About />
          <Project />
          <Footer />
        </div>
      </div>
    </div>
  );
}
