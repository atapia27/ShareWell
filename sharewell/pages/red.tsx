// pages/red.tsx
import Modal from "../components/Modal";
import { NextPage } from "next";
import {
  ButtonOptionOne,
  ButtonOptionTwo,
} from "../components/Buttons";
import {PageURL} from "../utils/PageURL"
import { useState } from "react";

const RedPage: NextPage = () => {
  const [firstModal] = useState(1);
  const [secondModal] = useState(3);

  return (
    <div className="min-h-[200vh] bg-red-500 text-white p-8">
      <h1 className="text-4xl">{PageURL()}</h1>
      <div className="mt-4 gap-20 flex">
        <ButtonOptionOne modalNumber={firstModal} />
        <ButtonOptionTwo modalNumber={secondModal} />
      </div>

    </div>
  );
};

export default RedPage;
