// pages/[color].tsx
import { NextPage } from "next";
import { InputForm } from "@/components/InputForm";
import {PageURL, PageURLtoLower} from "../../utils/PageURL"
import { twMerge } from "tailwind-merge";

const COLOR_STYLES: { [key: string]: string } = {
  default: "bg-red-500",
  rose: "bg-rose-500",
  pink: "bg-pink-500",
  fuchsia: "bg-fuchsia-500",
  purple: "bg-purple-500",
  violet: "bg-violet-500",
  indigo: "bg-indigo-500",
  blue: "bg-blue-500",
  lightBlue: "bg-lightBlue-500",
  cyan: "bg-cyan-500",
  teal: "bg-teal-500",
  emerald: "bg-emerald-500",
  green: "bg-green-500",
  lime: "bg-lime-500",
  yellow: "bg-yellow-500",
  amber: "bg-amber-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
  warmGray: "bg-warmGray-500",
  trueGray: "bg-trueGray-500",
  gray: "bg-gray-500",
  coolGray: "bg-coolGray-500",
  blueGray: "bg-blueGray-500",
};

const Color: NextPage = () => {
  // Check if the color is valid
  const isValidColor = (color: string): boolean => {
    return Object.keys(COLOR_STYLES).includes(color);
  };

  // Get the color style, default to default if the color is invalid
  const getColorStyle = (color: string): string => {
    return isValidColor(color) ? COLOR_STYLES[color] : COLOR_STYLES.default;
  };

  const baseStyle = "min-h-screen text-white p-8";
  const colorStyle = getColorStyle(PageURLtoLower());
  const combinedStyle = twMerge(baseStyle, colorStyle);

  return (
    <div className={combinedStyle}>
      <h1 className="text-4xl">{PageURL()}</h1>
      <div className="mt-4">
        <InputForm />
      </div>
    </div>
  );
};

export default Color;
