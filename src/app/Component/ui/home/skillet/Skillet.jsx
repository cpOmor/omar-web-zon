import Container from "../../../Container/Container";
import { DiJavascript1 } from "react-icons/di";
import { FaReact, FaBootstrap } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMaterialui,
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiAntdesign,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Skillet = () => {
  return (
    <Container>
      <div className="md:mt-32 mt-20 mb-10">
        <h1 className="">
          Professional <span className="text-[#c55cee]">Skillset</span>
        </h1>
      </div>
      <div>
        <div className="flex items-center justify-center ">
          <div className="grid md:grid-cols-6 gap-4 grid-cols-2">
            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <SiTailwindcss className="h-12 w-12" />
            </div>

            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <FaBootstrap className="h-12 w-12" />
            </div>
            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <FaReact className="h-12 w-12" />
            </div>
            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <GrMysql className="h-12 w-12" />
            </div>
            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <SiRedux className="h-12 w-12" />
            </div>
            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <SiExpress className="h-12 w-12" />
            </div>
            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <SiMongodb className="h-12 w-12" />
            </div>

            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <SiAntdesign className="h-12 w-12" />
            </div>
            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <DiJavascript1 className="h-12 w-12" />
            </div>
            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <SiNextdotjs className="h-12 w-12" />
            </div>
            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <SiFirebase className="h-12 w-12" />
            </div>

            <div className="flex items-center justify-center max-w-44 min-w-36 h-32 bg-gray-800 rounded-md text-white hover:scale-[1.05] transition ease-in-out shadow-md hover:shadow-lg hover:shadow-[#c55cee3a] shadow-[#2d2530]">
              <SiPostgresql className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Skillet;
