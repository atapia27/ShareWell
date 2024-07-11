// components/ModalBodyOne.tsx
import { twMerge } from "tailwind-merge";
import React from "react";
import Image from "next/image";

const BODY_ONE_VARIANTS = {
  1: {
    P1_styling: "text-sm font-normal leading-[140%]",
    P2_styling: "text-base font-bold leading-[140%]",
    // P1_styling
    // /* Typography/14px reg */
    // font-size: 14px;
    // font-weight: 400;
    // line-height: 140%; /* 19.6px */

    // P2_styling
    // font-size: 16px;
    // font-weight: 700;
    // line-height: 140%; /* 22.4px */
  },
  2: {
    P1_styling: "text-sm font-medium leading-[140%]",
    P2_styling: "text-base font-medium leading-[140%]",
    // P1_styling
    // /* Typography/14px */
    // font-size: 14px;
    // font-weight: 500;
    // line-height: 140%; /* 19.6px */

    // P2_styling:
    // /* Typography/16px */
    // font-size: 16px;
    // font-weight: 500;
    // line-height: 140%; /* 22.4px */
  },
  3: {
    P1_styling: "text-base font-normal leading-[140%] uppercase",
    P2_styling: "text-base font-semibold leading-[140%]",
    // P1_styling
    // /* Typography/16 CAPS */
    // font-size: 16px;
    // font-weight: 400;
    // line-height: 140%; /* 22.4px */
    // text-transform: uppercase;

    // P2_styling:
    // /* Typography/16px bold */
    // font-size: 16px;
    // font-weight: 600;
    // line-height: 140%; /* 22.4px */
  },
};

// Define the props for the ModalHeader component
interface ModalBodyOneProps {
  variant: keyof typeof BODY_ONE_VARIANTS; // Define a prop named variant
}

const ModalBodyOne: React.FC<ModalBodyOneProps> = ({ variant }) => {
  // Define base styles
  const baseStyleP1 = "text-sw-charcoal";
  const baseStyleP2 = "text-sw-purple";

  // Select variant styles
  const variantStyles = BODY_ONE_VARIANTS[variant];
  const textStyleP1 = twMerge(baseStyleP1, variantStyles.P1_styling);
  const textStyleP2 = twMerge(baseStyleP2, variantStyles.P2_styling);

  return (
    <div className="flex px-6 pt-6 items-center gap-[0.625rem] self-stretch justify-between">
      {/* state width to match design */}
      <div className=" flex flex-col items-start gap-1 w-2/3">
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
