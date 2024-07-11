// components/ModalFooter.tsx
import React from "react";
import { twMerge } from "tailwind-merge";

// const FOOTER_VARIANTS: { [key: number]: {textStyle: string, buttonTextStyle: string} } = {
const FOOTER_VARIANTS = {
  1: {
    textStyle: "	sm:font-normal md:font-medium",
    buttonTextStyle:
      "font-roboto text-base	font-medium	leading-[100%] tracking-[0.5px] sm:font-sans sm:font-semibold sm:leading-[140%]	sm:uppercase sm:tracking-normal	md:font-normal	 ",
  },
  2: {
    textStyle: "md:text-[15px]",
    buttonTextStyle:
      "font-roboto text-base font-medium	leading-[100%] tracking-[0.5px] sm:font-sans sm:leading-[140%] sm:tracking-normal",
  },
  3: {
    textStyle: "",
    buttonTextStyle:
      "font-roboto text-base	font-medium	leading-[100%] tracking-[0.5px] sm:font-sans sm:leading-[140%] md:text-lg	md:font-normal md:leading-8 md:tracking-[0.472px]	",
  },
};

// Define the props for the ModalHeader component
interface ModalFooterProps {
  variant: keyof typeof FOOTER_VARIANTS; // Define a prop named variant
}

const ModalFooter: React.FC<ModalFooterProps> = ({ variant }) => {
  // Define base styles
  const textBaseStyle =
    "text-sm font-medium text-sw-charcoal text-center w-full leading-[140%]";
  const buttonBaseStyle = "text-sw-modal-footer-text";

  // Define the variant styles
  const variantStyles = FOOTER_VARIANTS[variant];

  const textStyle = twMerge(textBaseStyle, variantStyles.textStyle);
  const buttonTextStyle = twMerge(
    buttonBaseStyle,
    variantStyles.buttonTextStyle
  );

  return (
    // self-stretch, do not have to define height
    <div className=" flex p-6 flex-col items-start gap-[0.625rem] self-stretch border-t border-solid border-sw-grey-ash bottom-0">
      <div className={textStyle}>Lorem Ipsum is simply dummy text.</div>
      <div className="flex py-3 px-8 justify-center items-center gap-2 self-stretch rounded-xl bg-sw-modal-footer-bg">
        <div className={buttonTextStyle}>Lorem Ipsum</div>
      </div>
    </div>
  );
};

export default ModalFooter;
