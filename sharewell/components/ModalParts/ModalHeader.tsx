// components/ModalHeader.tsx
/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";

// const HEADER_VARIANTS: { [key: number]: {modal: string, paragraph: string, date: JSX.Element} } = {
const HEADER_VARIANTS = {
  1: {
    modal: "Modal 1",
    // weird character in figma file, replaced it with a space: "Ipsum is"
    paragraph: "Lorem Ipsum is simply",
    date: (
      <>
        Thursday, Jun 22, 2024 <br /> 06:00pm - 07:30pm EST
      </>
    ),



  },
  2: {
    modal: "Modal 2",
    paragraph: "Lorem Ipsum is fun",
    date: (
      <>
        Friday, Jun 04, 2023 <br /> 09:00pm - 09:30pm PST
      </>
    ),
  },
  3: {
    modal: "Modal 3",
    paragraph: "Lorem Ipsum is wack",
    date: (
      <>
        Wednesday, Jun 21, 2023 <br /> 07:00pm - 07:30pm EST
      </>
    ),
  },
};

// Define the props for the ModalHeader component
interface ModalHeaderProps {
  variant: keyof typeof HEADER_VARIANTS; // Define a prop named variant
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ variant }) => {
  const { modal, paragraph, date } = HEADER_VARIANTS[variant]; // Destructure the selected variant

  return (
    // min-h-[30vh]
    <div className="min-h-[11.3125rem] sm:min-h-[14rem] flex justify-center items-center gap-[0.625rem] self-stretch bg-sw-purple shadow-sw-shadow relative">
      
      {/* WEB:
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px; 
      position: absolute;
      left: 48px;
      bottom: 43px;

      Mobile:
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      position: absolute;
      left: 24px;
      bottom: 24px;
      
      */}
      <div className="flex flex-col items-start gap-3 absolute left-6 sm:left-12 bottom-6 sm:bottom-10">
        <div className="flex items-center gap-[6.625rem]">
          {/* w-full implied */}
          <div className="text-sw-white text-lg sm:text-[2rem] font-medium leading-[140%] ">
            {modal}
          </div>
        </div>
        <div className="text-sw-white text-sm font-medium leading-[140%]">
          {paragraph}
        </div>
        <div className="text-sw-white text-base font-medium leading-[140%] sm:text-sm">
          {date}
        </div>
      </div>
      {/* Logo 
        
        if using logo.svg from figma, h-[224px] is default, and correct sizing as using individual elements
        */}
      <img
        className="h-2/3 sm:h-full flex justify-center items-center absolute right-0 bottom-0"
        src="/sw_logo.svg"
        alt="sw-logo"
      />
    </div>
  );
};

export default ModalHeader;
