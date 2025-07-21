import Spline from "@splinetool/react-spline";

const About = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 lg:grid-rows-2  lg:h-[541px] gap-7">
        <div
          style={{
            background: "url(/laptop.png)",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full object-cover rounded-xl  bg-center flex flex-col items-end justify-end  row-span-2 pl-11 pb-[60px]"
        >
          <h3 className="text-[32px] font-bold font-inter ">
            I prioritize client collaboration, fostering
            open communication{" "}
          </h3>
        </div>

        <div className="relative rounded-xl">
          <Spline
            scene="https://prod.spline.design/oam-kolCqmybCU6s/scene.splinecode"
            className="w-full h-full opacity-80 absolute object-cover"
          />
          <h3 className="text-[32px] font-bold font-inter relative z-10 pt-[40px] pl-[35px]">
            I’m very flexible with time zone communications
          </h3>
        </div>
        <div className="bg-blue-800 rounded-xl">
          {/* <h3 className="text-[32px] font-bold font-inter">
            My tech stack
          </h3> */}
        </div>
      </div>
    </div>
  );
};

export default About;
