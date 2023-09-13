import React from "react";
import Image from "next/image";
function CategoryItems({ category }) {
  return (
    <div>
      <div
        key={category.id}
        className="flex flex-col items-center bg-blue-100 p-3 rounded-md hover:scale-105 transition-all duration-100"
      >
        <p>{category.name}</p>
        <Image
          alt={category.name}
          src={category.icon}
          width={35}
          height={35}
        ></Image>
      </div>
    </div>
  );
}

export default CategoryItems;
