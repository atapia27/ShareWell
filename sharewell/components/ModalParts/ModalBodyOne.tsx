// components/ModalBodyOne.tsx
import { twMerge } from "tailwind-merge";
import React from "react";
import Image from "next/image";

// const BODY_ONE_VARIANTS: { [key: number]: {P1_styling: string, P2_styling: string} } = {
const BODY_ONE_VARIANTS = {
  1: {
    P1_styling: "text-sw-charcoal text-sm font-normal sm:font-medium md:font-normal",
    P2_styling: "text-sw-purple font-bold",
  
  },
  2: {
    P1_styling: "text-sw-charcoal text-sm font-medium",
    P2_styling: "text-sw-charcoal sm:text-sw-purple font-bold md:font-medium",

  },
  3: {
    P1_styling: "text-sw-purple sm: text-sw-charcoal font-medium sm:font-normal text-sm md:text-base md:uppercase",
    P2_styling: "text-sw-charcoal sm:text-sw-purple font-medium sm:font-semibold	",

  },
};

// Define the props for the ModalHeader component
interface ModalBodyOneProps {
  variant: keyof typeof BODY_ONE_VARIANTS; // Define a prop named variant
}

const ModalBodyOne: React.FC<ModalBodyOneProps> = ({ variant }) => {
  // Define base styles
  const baseStyleP1 = "leading-[140%]";
  // Seems like the scrollbar not visible in figma design, only stretch above sm
  const baseStyleP2 = "text-base leading-[140%] overflow-y-hidden sm:self-stretch";

  // Select variant styles
  const variantStyles = BODY_ONE_VARIANTS[variant];
  const textStyleP1 = twMerge(baseStyleP1, variantStyles.P1_styling);
  const textStyleP2 = twMerge(baseStyleP2, variantStyles.P2_styling);

  return (
    // min-h mobile
    <div className=" flex px-6 pt-6 items-center gap-[0.625rem] self-stretch justify-between">
      {/* state width to match design */}
      <div className=" flex flex-col items-start gap-1 w-2/3 overflow-y-hidden sm:self-stretch">
        <div className={textStyleP1}>Lorem Ipsum</div>
        <div className={textStyleP2}>Lorem Ipsum</div>
      </div>
      {/* using NextImage with Tailwind */}
      <button className="relative w-6 h-6">
        <Image
          src="/x-icon.svg"
          alt="x-icon"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
        />
      </button>
    </div>
  );
};

export default ModalBodyOne;
