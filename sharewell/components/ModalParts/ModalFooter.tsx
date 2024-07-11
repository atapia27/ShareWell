// components/ModalFooter.tsx
import React from 'react';
import { twMerge } from "tailwind-merge";

// const FOOTER_VARIANTS: { [key: number]: {textStyle: string, buttonTextStyle: string} } = {
const FOOTER_VARIANTS = {
  1: {
    textStyle: "	sm:font-normal md:font-medium",
    // /* Typography/14px */
    // font-size: 14px;

    buttonTextStyle: "font-Roboto text-base	font-medium	leading-[100%] tracking-[0.5px] sm:font-sans sm:font-semibold sm:leading-[140%]	sm:uppercase sm:tracking-normal	md:font-normal	 ",
    // /* Typography/16 CAPS */
    // font-size: 1rem;
    // font-weight: 400;
    // line-height: 140%; /* 1.4rem */
    // text-transform: uppercase;
  },
  2: {
    textStyle: "md:text-[15px]",
    // font-size: 15px;

    buttonTextStyle: "font-Roboto text-base font-medium	leading-[100%] tracking-[0.5px] sm:font-sans sm:leading-[140%] sm:tracking-normal",
    // /* Typography/16px */
    // font-size: 1rem;
    // font-weight: 500;
    // line-height: 140%; /* 1.4rem */
    
  },
  3: {
    textStyle: "",
    // /* Typography/14px */
    // font-size: 14px;

    buttonTextStyle: "font-Roboto text-base	font-medium	leading-[100%] tracking-[0.5px] sm:font-sans sm:leading-[140%] md:text-lg	md:font-normal md:leading-8 md:tracking-[0.472px]	",
    // MOBILE
    // color: rgba(41, 43, 46, 0.20);
    // /* Button/M */
    // font-family: Roboto;
    // font-size: 16px;
    // font-style: normal;
    // font-weight: 500;
    // line-height: 100%; /* 16px */
    // letter-spacing: 0.5px;

    // TABLET
    // color: rgba(41, 43, 46, 0.20);
    // /* Typography/16px */
    // font-family: Poppins;
    // font-size: 16px;
    // font-style: normal;
    // font-weight: 500;
    // line-height: 140%; /* 22.4px */

    // WEB
    // color: rgba(41, 43, 46, 0.20);
    /* Typography/18px Light */
    // font-family: Poppins;
    // font-size: 18px;
    // font-style: normal;
    // font-weight: 400;
    // line-height: 32px; /* 177.778% */
    // letter-spacing: 0.472px;

  },
};

// Define the props for the ModalHeader component
interface ModalFooterProps {
  variant: keyof typeof FOOTER_VARIANTS; // Define a prop named variant
}

const ModalFooter: React.FC<ModalFooterProps> = ({ variant }) => {
    // Define base styles
    const textBaseStyle = "text-sm font-medium text-sw-charcoal text-center w-full leading-[140%]";
    const buttonBaseStyle = "text-sw-modal-footer-text"

    // Define the variant styles
    const variantStyles = FOOTER_VARIANTS[variant];
  
    const textStyle = twMerge(textBaseStyle, variantStyles.textStyle);
    const buttonTextStyle = twMerge(buttonBaseStyle, variantStyles.buttonTextStyle);
    
  return (
    // min-h-[20vh]
    <div className=" flex p-6 flex-col items-start gap-[0.625rem] self-stretch border-t border-solid border-sw-grey-ash bottom-0">
      <div className={textStyle}>Lorem Ipsum is simply dummy text.</div>
      <div className="flex py-3 px-8 justify-center items-center gap-2 self-stretch rounded-xl bg-sw-modal-footer-bg">
      <div className={buttonTextStyle}>Lorem Ipsum</div>
      </div>
    </div>
  );
};

export default ModalFooter;
