// pages/red.tsx
import Modal from "../../components/Modal";
import { NextPage } from "next";
import { InputForm } from "@/components/InputForm";
import PageURL from "../../utils/PageURL"
import { useModalStore } from '../../store/modalStore';

const Color: NextPage = () => {

  return (
    <div className="min-h-screen bg-red-500 text-white p-8">
      <h1 className="text-4xl">{PageURL()}</h1>
      <div className="mt-4">
        <InputForm/>
      </div>
    </div>
  );
};

export default Color;
