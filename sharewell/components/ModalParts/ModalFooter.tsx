// components/ModalFooter.tsx
import React from 'react';
import { twMerge } from "tailwind-merge";

const FOOTER_VARIANTS = {
  1: {
    textStyle: "text-sm ",
    // /* Typography/14px */
    // font-size: 14px;

    buttonTextStyle: "text-base	font-normal	leading-[140%] uppercase",
    // /* Typography/16 CAPS */
    // font-size: 1rem;
    // font-weight: 400;
    // line-height: 140%; /* 1.4rem */
    // text-transform: uppercase;
  },
  2: {
    textStyle: "text-[0.9375rem]",
    // font-size: 15px;

    buttonTextStyle: "text-base	font-medium	leading-[140%]",
    // /* Typography/16px */
    // font-size: 1rem;
    // font-weight: 500;
    // line-height: 140%; /* 1.4rem */
    
  },
  3: {
    textStyle: "text-sm",
    // /* Typography/14px */
    // font-size: 14px;

    buttonTextStyle: "text-lg font-normal	leading-8 tracking-[0.0295rem]",
    // /* Typography/18px Light */
    // font-size: 1.125rem;
    // font-weight: 400;
    // line-height: 32px; /* 177.778% */
    // letter-spacing: 0.0295rem;

  },
};

// Define the props for the ModalHeader component
interface ModalFooterProps {
  variant: keyof typeof FOOTER_VARIANTS; // Define a prop named variant
}

const ModalFooter: React.FC<ModalFooterProps> = ({ variant }) => {
    // Define base styles
    const textBaseStyle = "text-sw-charcoal text-center w-full font-medium leading-[140%]";
    const buttonBaseStyle = "text-sw-modal-footer-text"

    // Define the variant styles
    const variantStyles = FOOTER_VARIANTS[variant];
  
    const textStyle = twMerge(textBaseStyle, variantStyles.textStyle);
    const buttonTextStyle = twMerge(buttonBaseStyle, variantStyles.buttonTextStyle);
    
  return (
    <div className="flex p-6 flex-col items-start gap-[0.625rem] self-stretch border-t border-solid border-sw-grey-ash">
      <div className={textStyle}>Lorem Ipsum is simply dummy text.</div>
      <div className="flex py-3 px-8 justify-center items-center gap-2 self-stretch rounded-xl bg-sw-modal-footer-bg">
      <div className={buttonTextStyle}>Lorem Ipsum</div>
      </div>
    </div>
  );
};

export default ModalFooter;
