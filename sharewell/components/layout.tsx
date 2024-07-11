// components/PageLayout.tsx
// rough Idea
import { ReactNode } from "react";
import Modal from "./Modal";
import { ButtonOptionOne, ButtonOptionTwo } from "./Buttons";
import {PageURL} from "../utils/PageURL"
import { useState } from "react";

interface PageLayoutProps {
  bgColor: string;
  firstModalNumber: number;
  secondModalNumber: number;
  children: ReactNode;
}


// type needs to be changed
const PageLayout: React.FC<PageLayoutProps> = ({ bgColor, firstModalNumber, secondModalNumber, children }) => {
    const [firstModal] = useState(firstModalNumber);
    const [secondModal] = useState(secondModalNumber);

  return (
    // Replace top div with [color] code
    <div className={`min-h-[200vh] bg-${bgColor}-500 text-white p-8`}>
      <h1 className="text-4xl">{PageURL()}</h1>
      <div className="mt-4 gap-20 flex">
        <ButtonOptionOne modalNumber={firstModal} />
        <ButtonOptionTwo modalNumber={secondModal} />
      </div>
      {children}
      <Modal modalNumber={firstModal}/>
      <Modal modalNumber={secondModal}/>
    </div>
  );
};

export default PageLayout;