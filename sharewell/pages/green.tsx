// pages/green.tsx
import Modal from "../components/Modal";
import { NextPage } from "next";
import {
  ButtonOptionOne,
  ButtonOptionTwo,
} from "../components/Buttons";
import {PageURL} from "../utils/PageURL"
import { useState } from "react";

const GreenPage: NextPage = () => {
  const [firstModal] = useState(1);
  const [secondModal] = useState(2);

  return (
    <div className="min-h-[200vh] bg-green-500 text-white p-8">
      <h1 className="text-4xl">{PageURL()}</h1>
      <div className="mt-4">
        <ButtonOptionOne modalNumber={firstModal} />
        <ButtonOptionTwo modalNumber={secondModal} />
      </div>
        <Modal modalNumber={firstModal}/>
        <Modal modalNumber={secondModal}/>
    </div>
  );
};

export default GreenPage;
