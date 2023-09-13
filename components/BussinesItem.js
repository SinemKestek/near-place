import React from "react";
import Image from "next/image";

function BussinesItem() {
  return (
    <div className="flex gap-3 p-4 border-b-[1px] border-purple-800">
      <Image
        src="/placeholder.jpg"
        width={100}
        height={90}
        className="rounded-xl object-cover h-[100px] w-[100px]"
      />
      <div>
        <h2 className="font-semibold  text-blue-800 text-[22px]">Name</h2>
        <h2 className="font-semibold text-gray-500 text-[17px]">adress</h2>
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-6 text-purple-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <h3 className="font-semibold">4.7</h3>
        </div>
      </div>
    </div>
  );
}

export default BussinesItem;
