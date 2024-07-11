// pages/blue.tsx
import Modal from "../components/Modal";
import { NextPage } from "next";
import {
  ButtonOptionOne,
  ButtonOptionTwo,
} from "../components/Buttons";
import PageURL from "../utils/PageURL"

const BluePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-blue-500 text-white p-8">
      <h1 className="text-4xl">{PageURL()}</h1>
      <div className="mt-4">
        <ButtonOptionOne modalNumber={2} />
        <ButtonOptionTwo modalNumber={3} />
      </div>
        <Modal modalNumber={2}/>
        <Modal modalNumber={3}/>
    </div>
  );
};

export default BluePage;
