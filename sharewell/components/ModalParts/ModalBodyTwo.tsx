// components/ModalBodyTwo.tsx
import React from "react";
import { twMerge } from "tailwind-merge";

const BODY_TWO_VARIANTS = {
  1: {
    textStyle: "font-normal",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",

    // font-weight: 400;
  },
  2: {
    textStyle: "font-normal",
    content:
      "Lorem Ipsum is simply dummy cillum dolore eu fugiat nulla pariatur. cillum dolore eu fugiat nulla pariatur.",

    // font-weight: 400;
  },
  3: {
    textStyle: "font-medium",
    content:
      "Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",

    // font-weight: 500;
  },
};

// Define the props for the ModalHeader component
interface ModalBodyTwoProps {
  variant: keyof typeof BODY_TWO_VARIANTS; // Define a prop named variant
}

const ModalBodyTwo: React.FC<ModalBodyTwoProps> = ({ variant }) => {
  // Define base styles
  const baseStyle = "text-sm text-sw-black leading-[140%]";
  // Define the variant styles
  const variantStyles = BODY_TWO_VARIANTS[variant];

  const textStyle = twMerge(baseStyle, variantStyles.textStyle);
  const content = variantStyles.content;

  return (
    <div className="flex px-6 pt-4 pb-6 flex-col justify-center items-start gap-4 self-stretch">
      <div className={textStyle}>{content}</div>
    </div>
  );
};

export default ModalBodyTwo;
