import Container from "../../../Container/Container";
import Image from "next/image";
import { HiExternalLink } from "react-icons/hi";
import biyerFull from "./../../../../assists/projects/biyer-ful.png";
import digitalEcom from "./../../../../assists/projects/digital-ecom.png";
import innovatonHub from "./../../../../assists/projects/innovaton-hub.png";
import Link from "next/link";

const project = [
  {
    id: 1,
    title: "Biyer Ful",
    live: "https://biyer-ful.vercel.app/",
    code: "https://github.com/cpOmor/biyer-ful.git",
    image: biyerFull,
  },
  {
    id: 2,
    title: "Digital Ecom",
    live: "https://digital-ecom-dun.vercel.app/",
    code: "https://github.com/cpOmor/biyer-ful.git",
    image: digitalEcom,
  },
  {
    id: 3,
    title: "Innovaton Hub",
    live: "https://fascinating-kelpie-783df5.netlify.app/",
    code: "https://github.com/omar-web-dev/learning-platform-client-side.git",
    image: innovatonHub,
  },
];

const Projects = () => {
  return (
    <Container>
      <div className="md:mt-32 mt-20 items-center">
        <div className="mb-10">
          <div>
            <p>PROJECTS</p>
          </div>
          <h1 className="font-normal">
            Recent{" "}
            <span className="text-[#c55cee] font-semibold md:text-[2rem] text-[1.2rem]">Projects</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {project.map((item, i) => (
            <div key={i}>
              <div className="group relative w-full max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 bg-gray-500 inset-0 transform transition-transform duration-300 ease-out group-hover:scale-105">
                  <div className="h-80 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="responsive"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-out opacity-10 group-hover:opacity-100 flex items-center justify-center">
                  <div className="text-center p-4"></div>
                </div>
                <div className="absolute group-hover:bottom-4 -bottom-14 left-4 right-4 duration-100 translate-x-0 flex space-x-2">
                  <div className="flex justify-between items-center w-full px-2 pb-2">
                    <div>
                      <h1 className="text-white text-xl font-bold mb-2">
                        {item.title}
                      </h1>
                    </div>
                    <div className="flex items-center gap-4">
                      {item.live && (
                        <Link
                          target="_blank"
                          href={item.live}
                          className="p-2 bg-white rounded-full group-hover:bg-red-500 transition-colors duration-300"
                        >
                          <HiExternalLink />
                        </Link>
                      )}
                      {item.code && (
                        <Link target="_blank" href={item.code}>
                          <button className="p-2 bg-white rounded-full group-hover:bg-red-500 transition-colors duration-300">
                            <HiExternalLink />
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
