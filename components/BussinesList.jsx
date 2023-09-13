import React, { useState } from "react";
import BussinesItem from "./BussinesItem";

function BussinesList() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div className="text-[20px] mt-3 font-bold mb-3 flex items-center justify-between ">
        Top Nearby Places
        <span className="flex">
          {count >= 0 ? (
            <svg
              onClick={() => setCount(count - 1)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-500 mr-2 hover:text-purple-500 cursor-pointer "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
              />
            </svg>
          ) : null}

          <svg
            onClick={() => setCount(count + 1)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-blue-500 mr-2 hover:text-purple-500 cursor-pointer "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
      <BussinesItem></BussinesItem>
    </div>
  );
}

export default BussinesList;
