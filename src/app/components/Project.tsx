const Project = () => {
  return (
    <div className="lg:mt-28 mt-14 " id="work">
      <div>
        <h2 className="font-inter lg:text-5xl text-4xl   text-center  font-bold ">
          My{" "}
          <span className="text-[#CBACF9]">projects</span>
        </h2>
        <div className="flex lg:flex-row flex-col gap-7 lg:gap-10 mt-6 lg:mt-12">
          <div
            style={{
              borderRadius: "23px",
              border: "1px solid rgba(54, 55, 73, 0.43)",
              background:
                "linear-gradient(103deg, #04071D 16.66%, #0C0E23 81.61%)",
            }}
          >
            <div className="py-[20px] px-[15px]">
              <div className="flex justify-center items-center bg-[#13162D] rounded-[15px] overflow-clip">
                <img
                  src="/ecom-pr.png"
                  className="h-full w-[80%] rotate-6 hover:scale-110 transition-all ease-out duration-300"
                />
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <p className="font-inter text-xl lg:text-4xl font-bold">
                  Modern Ecommerce website
                </p>
                <p className="lg:text-xl text-sm text-[#BEC1DD] font-inter">
                  built a modern ecommerce website with MERN
                  stack using React.js, Node.js, Express.js,
                  and MongoDB. The website has features such
                  as user authentication, product listing,
                  shopping cart, and payment gateway
                  integration
                </p>
                <a
                  href="http://16.171.197.228:3000/shop/home"
                  target="_blank"
                  className="text-[#CBACF9]"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              borderRadius: "23px",
              border: "1px solid rgba(54, 55, 73, 0.43)",
              background:
                "linear-gradient(103deg, #04071D 16.66%, #0C0E23 81.61%)",
            }}
          >
            <div className="py-[20px] px-[15px]">
              <div
                className="flex justify-center items-center bg-[#13162D] rounded-[15px] overflow-clip"
                style={{}}
              >
                <img
                  src="./yum-labs.png"
                  className="h-full w-[80%] rotate-6 hover:scale-110 transition-all ease-out duration-300"
                />
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <p className="font-inter text-xl lg:text-4xl font-bold">
                  Modern Landing Page
                </p>
                <p className="lg:text-xl text-sm text-[#BEC1DD] font-inter ">
                  built a modern landing page with React.js
                  using Tailwind CSS. The landing page has a
                  clean and modern design, using Tailwind
                  CSS. with slick animations using gsap
                </p>
                <a
                  href="https://yumlabs.vercel.app/"
                  target="_blank"
                  className="text-[#CBACF9]"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
