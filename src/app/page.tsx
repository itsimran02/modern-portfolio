import Image from "next/image";
import { spotlight } from "./assets";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

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
        <div className="absolute top-0 right-[50px] -z-10 scale-x-[-1]">
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
          <Nav />
          <Hero />
        </div>
      </div>
    </div>
  );
}
