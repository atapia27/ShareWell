// components/ModalHeader.tsx
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";

// const HEADER_VARIANTS: { [key: number]: {modal: string, paragraph: string, date: JSX.Element} } = {
const HEADER_VARIANTS = {
  1: {
    modal: "Modal 1",
    // weird character in figma file, replaced it with a space: "Ipsum is"
    paragraph: "Lorem Ipsum is simply",
    paragraphMd: undefined,
    date: (
      <>
        Thursday, Jun 22, 2024 <br /> 06:00pm - 07:30pm EST
      </>
    ),
  },
  2: {
    modal: "Modal 2",
    paragraph: "Lorem Ipsum is fun",
    paragraphMd: undefined,
    date: (
      <>
        Friday, Jun 04, 2023 <br /> 09:00pm - 09:30pm PST
      </>
    ),
  },
  3: {
    modal: "Modal 3",
    paragraph: "Lorem Ipsum is cool",
    paragraphMd: "Lorem Ipsum is wack",
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
  const { modal, paragraph, paragraphMd, date } = HEADER_VARIANTS[variant]; // Destructure the selected variant

  // {/* Dealing with case where screen changes content in module */}

  const [isNotWeb, setIsNotWeb] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsNotWeb(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    // min-h is the lowest height in designs
    <div className="min-h-[11.3125rem] sm:min-h-[14rem] flex justify-center items-center gap-[0.625rem] self-stretch bg-sw-purple shadow-sw-shadow relative">
      <div className="flex flex-col items-start gap-3 absolute left-6 sm:left-12 bottom-6 sm:bottom-10">
        <div className="flex items-center gap-[6.625rem]">
          {/* w-full implied */}
          <div className="text-sw-white text-lg sm:text-[2rem] font-medium leading-[140%] ">
            {modal}
          </div>
        </div>
        <div className="text-sw-white text-sm font-medium leading-[140%]">
          {/* Dealing with case where screen changes content in module */}
          {isNotWeb ? paragraph : paragraphMd || paragraph}
          {/* Conditional rendering based on screen size */}
        </div>
        <div className="text-sw-white text-base font-medium leading-[140%] sm:text-sm">
          {date}
        </div>
      </div>
      {/* Logo
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
