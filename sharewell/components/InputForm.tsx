import { useState } from "react";
import { ButtonOptionInput } from "./Buttons";
import Modal from "./Modal";

export const InputForm: React.FC = () => {
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        className="border border-gray-400 rounded p-2 mb-4 text-black"
      />
      <ButtonOptionInput modalNumber={inputValue} />
      <Modal modalNumber={inputValue} />
    </div>

  );
}