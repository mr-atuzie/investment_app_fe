import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ title, answer }) => {
  const [accordion, setAccordion] = useState(false);
  return (
    <div className="p-4 rounded-sm bg-white shadow-sm mb-4">
      <button
        className="  w-full flex justify-between  text-base items-center"
        onClick={() => setAccordion(!accordion)}
      >
        <h1 className=" font-medium text-sm">{title}</h1>

        {accordion ? (
          <span className=" text-orange-500">
            <FaMinus />
          </span>
        ) : (
          <span className=" text-orange-500">
            <FaPlus />
          </span>
        )}
      </button>
      <div
        className={`grid border-t mt-2 py-2  overflow-hidden transition-all duration-300 ease-in-out text-slate-700 text-sm ${
          accordion ? " grid-rows-[1fr] block" : "grid-rows-[0fr] hidden"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
