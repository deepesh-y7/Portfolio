import React from "react";
import { GiAxeInLog } from "react-icons/gi";
import { FaSmile } from "react-icons/fa";

const CurrentlyMaking = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-48 max-sm:mt-24 gap-5 text-gray-700 font-mono text-center ">
      
      <p className="text-[22px]  text-gray-700 font-bold flex items-center gap-2">
        Currently cooking
        <FaSmile className="text-blue-200 text-[22px]" />
      </p>

      <p className="flex text-[18px] max-sm:flex-col max-sm:text-sm text-gray-500 items-center justify-center text-center leading-relaxed">
         Something new called  
        <span className="font-handwritten text-[24px] px-3 text-gray-800 inline-flex items-center gap-2  my-2">
          <GiAxeInLog className="text-[50px] text-gray-700 shadow-md py-2 px-1 transform hover:-translate-2 transition-all" /> Backend
        </span>
        &  AI integration
      </p>

      <p className="text-gray-500 max-sm:text-sm ">Stay tuned for our TestFlight ✈️</p>
    </section>
  );
};

export default CurrentlyMaking;
