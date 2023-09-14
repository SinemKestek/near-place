import React, { useEffect, useState } from "react";
import Data from "../CategoryList/Data";

import CategoryItems from "./CategoryItems";
function List() {
  const [category, setCategory] = useState();
  useEffect(() => {
    setCategory(Data.CategoryList);
  }, []);
  // console.log(category);
  return (
    <div>
      <h3 className="text-[20px] mt-3 font-bold mb-3 ">Select </h3>
      {category ? (
        <div className="flex gap-6 mb-4">
          {category?.map((item, index) => (
            <div key={index}>
              {" "}
              <CategoryItems category={item} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default List;
