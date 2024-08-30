//   import DatePicker from "react-datepicker";
//   import { useAppSelector } from "../redux/features/hooks";
//   import { selectCurrentUser, TUser } from "../redux/features/auth/authSlice";

import Head from "next/head";
import Image from "next/image";
import profile from "@/app/assists/omar.png";
import Link from "next/link";

const PDFGenerator = ({ componentRef }) => {
  return (
    <>
      <div
        ref={componentRef}
        className=" mx-auto bg-white text-black"
        style={{ width: "850px" }}
      >
        <Head>
          {/* <link
                  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
                  rel="stylesheet"
                /> */}
        </Head>

        {/* <NextSeo
                title="Omar Faruk - Full Stack Developer & SEO Expert"
                description="Portfolio of Omar Faruk, a dedicated full stack developer and SEO expert specializing in the MERN and PERN stacks."
                canonical="https://yourdomain.com/profile"
                openGraph={{
                  url: "https://yourdomain.com/profile",
                  title: "Omar Faruk - Full Stack Developer & SEO Expert",
                  description:
                    "Portfolio of Omar Faruk, a dedicated full stack developer and SEO expert specializing in the MERN and PERN stacks.",
                  images: [
                    {
                      url: { profile },
                      width: 800,
                      height: 600,
                      alt: "Omar Faruk Profile Image",
                    },
                  ],
                  site_name: "Omar Faruk Portfolio",
                }}
                twitter={{
                  handle: "@yourhandle",
                  site: "@site",
                  cardType: "summary_large_image",
                }}
              /> */}

        <div className=" bg-opacity-80 p-8 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex  justify-between">
            <div>
              <h1
                className="text-4xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Omar Faruk
              </h1>
              <p className="text-sm text-gray-600">
                Shahjahanpur, Khilgaon, Dhaka
              </p>
              <p className="text-sm text-gray-600">
                Mobile: 01970-299035 || 01837-391145
              </p>
              <p className="text-sm text-gray-600">
                Email:{" "}
                <a
                  href="mailto:cpomar121@gmail.com"
                  className="text-blue-500 underline"
                >
                  cpomar121@gmail.com
                </a>
              </p>
            </div>
            <Image
              src={profile}
              alt="Omar Faruk"
              width={130}
              height={130}
              className="rounded-lg mt-2 border-4 border-gray-300 shadow-lg"
            />
          </div>

          <div className="flex flex-col justify-center mt-4">
            <section>
              <h2
                className="text-2xl font-semibold text-gray-700 p-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  background: "#edecec",
                }}
              >
                Career Objective
              </h2>
              <p className="mt-2 text-gray-600 text-justify">
                I am a dedicated full stack developer and an SEO expert
                specializing in MERN (MongoDB, Express.js, React, Node.js) and
                PERN (PostgreSQL, Express.js, React, Node.js) stacks. Building
                web applications using React, Next.js, TypeScript, Firebase,
                while implementing strategic SEO optimized website
                functionality. Proficient in using modern frameworks like
                Tailwind CSS, Bootstrap, Material UI and Ant Design, I create
                responsive and visually appealing websites. My expertise in both
                backend and frontend development allows me to deliver
                comprehensive web solutions that enhance online visibility and
                user experience for clients.
              </p>
            </section>

            <section className="mt-4">
              <h2
                className="text-2xl font-semibold text-gray-700 p-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  background: "#edecec",
                }}
              >
                Languages and Tools
              </h2>

              <div className="flex gap-4">
                <ul
                  className="mt-2  text-gray-600 list-disc list-inside"
                  style={{ width: "150px" }}
                >
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                  <li>Ant Design</li>
                </ul>
                <ul
                  className="mt-2 text-gray-600 list-disc list-inside"
                  style={{ width: "120px" }}
                >
                  <li>React</li>
                  <li>Next js</li>
                  <li>Redux</li>
                  <li>Firebase</li>
                </ul>
                <ul
                  className="mt-2  text-gray-600 list-disc list-inside"
                  style={{ width: "200px" }}
                >
                  <li>TypeScript</li>
                  <li>MongoDB (mongoose)</li>
                  <li>Node js (exporess)</li>
                  <li>Postgase SQL</li>
                </ul>
                <p
                  className="mt-2 text-gray-600 list-disc list-inside"
                  style={{ width: "300px" }}
                >
                  Basic graphic design (canva) <br /> SEO (Keyword, tag, title,
                  image) <br /> Figma, PSD, ER Diagram <br /> Git (git
                  mantenace)
                </p>
              </div>
            </section>
            <section className="mt-4">
              <h2
                className="text-2xl font-semibold text-gray-700 p-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  background: "#edecec",
                }}
              >
                Professional Experience
              </h2>

              <div className="mt-2">
                <div className="flex justify-between">
                  <p>
                    <strong>ITCore</strong>
                  </p>
                  <strong>July 2022 - Present</strong>
                </div>
                <strong>Full Stack Developer & SEO Expat</strong>
                <p className="text-justify mt-1">
                  IT Core is a premier company specializing in web development,
                  graphic design, SEO, digital marketing, and more, dedicated to
                  elevating your online presence and driving business growth.
                </p>
              </div>
              <div className="mt-2">
                <div className="flex justify-between">
                  <p>
                    <strong>Font end developer (internship)</strong>
                  </p>
                  <strong>Apply - May 2022</strong>
                </div>
                <strong>Full Stack Developer & SEO Expat</strong>
                <p className="text-justify mt-1">
                  This company specializes in frontend web development, crafting
                  visually stunning and highly functional websites design,
                  responsive layouts, and performance optimization.
                </p>
              </div>
            </section>

            <section className="mt-4 mb-4">
              <h2
                className="text-2xl font-semibold text-gray-700 p-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  background: "#edecec",
                }}
              >
                Recent works
              </h2>

              <div className="mt-2">
                <Link href="https://doctalk-jaznan.vercel.app" target="_blank">
                  <strong>Doctalk</strong>
                </Link>
                <p className="text-justify">
                  A doctor booking project using React.js with Material UI for
                  the frontend, Firebase for user authentication, Stripe for
                  payments, Node.js and Express.js for the backend with MongoDB
                  for data storage, and a WhatsApp chat widget for direct
                  communication with doctors.
                </p>
              </div>
              <div className="mt-2">
                <Link href="https://www.hisabpati.com" target="_blank">
                  <strong>hisabpati</strong>
                </Link>
                <p className="text-justify">
                  The HisabPati website is a financial management platform
                  developed using React.js for the frontend, Node.js and
                  Express.js for the backend, and styled with Tailwind CSS. It
                  offers features such as income and expense tracking, loan
                  management, and detailed financial reporting.
                </p>
              </div>

              <div className="mt-2">
                <Link href="https://www.itcoreltd.com" target="_blank">
                  <strong>itcoreltd</strong>
                </Link>
                <p className="text-justify">
                  The ITCore LTD website is a SEO developed using Next.js for
                  the frontend, Node.js and Express.js for the backend, and
                  styled with Tailwind CSS.
                </p>
              </div>
              <div className="mt-2">
                <Link
                  href="https://lushconstructions.vercel.app"
                  target="_blank"
                >
                  <strong>lushconstructions</strong>
                </Link>
                <p className="text-justify">
                  Lush Constructions leads the Australian construction industry
                  with a mission to deliver unparalleled quality in every
                  project, from cosy homes to sprawling corporate offices, using
                  Next.js for robust web applications and Tailwind CSS for
                  sleek, responsive designs.
                </p>
              </div>
            </section>
            <div className="border border-b !my-2"></div>
            <section className="flex gap-4">
              <div className="w-full">
                <h2
                  className="text-2xl font-semibold text-gray-700 py-2"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Education & Certifications
                </h2>
                <div
                  className=" p-4"
                  style={{
                    background: "#edecec",
                  }}
                >
                  <strong>Bachelor of Business Studies (BBS) - Present</strong>
                  <p>Institute: Saikat Gov. collage</p>
                  <div className="flex">
                    <div className="w-full">
                      <strong>HSC - 2020</strong>
                      <p>Saikat Gov. collage </p>
                    </div>
                    <div className="w-full" >
                      <strong>SSC - 2018</strong>
                      <p>LLC High School </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h2
                  className="text-2xl font-semibold text-gray-700 py-2"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Online course
                </h2>
                <div
                  className=" p-4"
                  style={{
                    background: "#edecec",
                  }}
                >
                  <strong>Next Level Web development (MERN stack)</strong>
                  <p>programming hero Barch - 02</p>
                  <strong>Complete Web Development (Font End)</strong>
                  <p>programming hero Barch - 06 </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default PDFGenerator;
