import React from "react";
import Image from "next/image";

function SideNav() {
  const menu = [
    {
      id: 1,
      name: "search",
      logo: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    },
    {
      id: 2,
      name: "Fav",
      logo: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
    },
  ];

  return (
    <div className="p-2 h-screen items-center flex flex-col w-[140px] space-y-4 shadow-md stickt top-0 z-10 shadow-blue-500">
      <Image src="/logo.png" alt="logo" width={50} height={50}></Image>
      {menu.map((item, id) => (
        <svg
          key={id}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 hover:text-purple-800 cursor-pointer p-1 "
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={item.logo} />
        </svg>
      ))}
    </div>
  );
}

export default SideNav;
