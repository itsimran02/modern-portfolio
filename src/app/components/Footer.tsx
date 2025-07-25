"use client";

import {
  Instagram,
  FacebookIcon,
  Github,
  GithubIcon,
  Linkedin,
} from "lucide-react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="lg:mt-20 mt-14 " id="footer">
      <div className="flex items-center flex-col">
        <h2 className="font-inter lg:text-5xl text-4xl   text-center  font-bold lg:w-[80%] ">
          Ready to take{" "}
          <span className="text-[#CBACF9]">
            your digital{" "}
          </span>
          presence to the next level?
        </h2>
        <p className="lg:mt-6 mt-4 text-center font-inter font-normal lg:text-base text-sm  text-[#C1C2D3]">
          Reach out to me today and let&apos;s discuss how I
          can help you achieve your goals.
        </p>
        <a
          href="https://www.linkedin.com/in/imran-shaikh-17b410217/"
          className="lg:mt-7 mt-5"
        >
          <Button>Connect With Me</Button>
        </a>
      </div>
      <div className="lg:mt-6 mt-4 py-4 lg:py-6 flex justify-between">
        <p className=" font-inter font-normal lg:text-base text-sm  text-[#C1C2D3]">
          Copyright @ 2025
        </p>
        <div className="flex gap-2">
          <a href="https://github.com/itsimran02">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/imran-shaikh-17b410217/">
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
