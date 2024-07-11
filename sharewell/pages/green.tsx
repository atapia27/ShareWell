// pages/green.tsx
import Modal from "../components/Modal";
import { NextPage } from "next";
import {
  ButtonOptionOne,
  ButtonOptionTwo,
} from "../components/Buttons";
import PageURL from "../utils/PageURL"

const GreenPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-green-500 text-white p-8">
      <h1 className="text-4xl">{PageURL()}</h1>
      <div className="mt-4">
        <ButtonOptionOne modalNumber={1} />
        <ButtonOptionTwo modalNumber={2} />
      </div>
        <Modal modalNumber={1}/>
        <Modal modalNumber={2}/>
    </div>
  );
};

export default GreenPage;
