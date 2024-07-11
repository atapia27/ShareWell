// pages/red.tsx
import Modal from "../components/Modal";
import { NextPage } from "next";
import {
  ButtonOptionOne,
  ButtonOptionTwo,
} from "../components/Buttons";
import PageURL from "../utils/PageURL"

const RedPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-red-500 text-white p-8">
      <h1 className="text-4xl">{PageURL()}</h1>
      <div className="mt-4">
        <ButtonOptionOne modalNumber={1} />
        <ButtonOptionTwo modalNumber={3} />
      </div>
        <Modal modalNumber={1}/>
        <Modal modalNumber={3}/>
    </div>
  );
};

export default RedPage;
