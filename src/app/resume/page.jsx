"use client";
import PDFGenerator from "@/utils/PDFGenerator";
import Container from "../Component/Container/Container";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

const Resume = () => {
  const componentRef = useRef(null);
  return (
    <Container>
      <div className="mx-auto my-2 fixed right-[45%] cursor-pointer  bottom-10">
        <ReactToPrint
          trigger={() => (
            <p
              style={{ width: "120px" }}
              className="mt-4 justify-center  mx-auto flex items-center gap-2 bg-[#934cce5e] px-4 py-1 hover:outline hover:outline-1 hover:outline-[#623686]"
            >
              Download
            </p>
          )}
          content={() => componentRef.current}
        />
      </div>
      <div className="mt-10">

      <PDFGenerator componentRef={componentRef}></PDFGenerator>
      </div>
    </Container>
  );
};
export default Resume;
