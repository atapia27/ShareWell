// components/ModalBodyTwo.tsx
import React from "react";
import { twMerge } from "tailwind-merge";

// const BODY_TWO_VARIANTS: { [key: number]: {textStyle: string, content: string} } = {
const BODY_TWO_VARIANTS = {
  1: {
    textStyle: "text-base font-medium sm:text-sm md:font-normal",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    // WEB: font-weight: 400;
    // TABLET: font-weight: 500;


  },
  2: {
    textStyle: "text-sm font-medium	sm:text-base md:text-sm	font-normal",
    content:
      "Lorem Ipsum is simply dummy cillum dolore eu fugiat nulla pariatur. cillum dolore eu fugiat nulla pariatur.",
    

    // font-weight: 400;
  },
  3: {
    textStyle: "text-base font-medium	sm:text-sm",
    content: "Lorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitLorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitLorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitLorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitLorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitLorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitLorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitLorem Ipsum qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    // font-weight: 500;
  },
};




// Define the props for the ModalHeader component
interface ModalBodyTwoProps {
  variant: keyof typeof BODY_TWO_VARIANTS; // Define a prop named variant
}

const ModalBodyTwo: React.FC<ModalBodyTwoProps> = ({ variant }) => {
  // Define base styles
  const baseStyle = "text-sw-black leading-[140%] self-stretch overflow-y-auto sm:overflow-y-scroll";
  // Define the variant styles
  const variantStyles = BODY_TWO_VARIANTS[variant];

  const textStyle = twMerge(baseStyle, variantStyles.textStyle);
  const content = variantStyles.content;

  return (
    // Overflow not shown in mobile
    // min-h mobile
    <div className="min-h-[2.5rem] flex px-6 pt-4 pb-6 flex-col justify-center items-start gap-4 self-stretch">
      <div className={textStyle}>{content}</div>
    </div>
  );
};

export default ModalBodyTwo;
