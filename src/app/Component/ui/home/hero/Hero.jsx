import Container from "../../../Container/Container";
import "./hero.css";
import Image from "next/image";
import homeSvg from "../../../../assists/omar.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Type from "../../../type/Type";

const Hero = () => {
  return (
    <>
      <Container className="!max-w-[1100px]">
        <div className="flex-col-reverse flex md:flex-row justify-between !items-center md:h-screen h-[80vh] ">
          <div className=" text-white">
            {" "}
            <div className="home-header">
              <h1 className="md:text-[2.4rem] text-[1.5rem] md:text-start text-center">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="md:text-[2.4rem] text-[1.5rem]  md:text-start text-center">
                {`I'M`}
                <strong className="text-[#c55cee]"> Omar Faruk</strong>
              </h1>

              <div className="text-[#c55cee] md:text-[2rem] text-[1.2rem] font-bold  md:text-start text-center">
                <Type />
              </div>
              <div>
                <button className="mt-4 md:mx-0 mx-auto flex items-center gap-2 bg-[#934cce5e] px-4 py-1 hover:outline hover:outline-1 hover:outline-[#623686]">
                  <span> Resume</span> <BsFillArrowRightCircleFill />
                </button>
              </div>
            </div>
          </div>
          <div className=" text-white mt-20 ">
            <Image
              className="md:w-[380px] w-[220px] outline outline-gray-500 hover:outline-[#c55cee] rounded-[30px] -mt-10  md:rotate-3 hover:rotate-0 rotate-0  duration-300 ease-out"
              src={homeSvg}
              width={1000}
              height={1200}
              alt="omar faruk web designer web developer MERN stack developer"
            ></Image>
          </div>
        </div>
      </Container>
      <div className="heroBg"> </div>
    </>
  );
};
export default Hero;
