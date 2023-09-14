import React from "react";
function SearchBar() {
  return (
    <div className="flex gap-2 bg-blue-100 rounded-lg px-3 ">
      <input
        onKeyDown={(e) => {
          e.key == "Enter" && console.log(e.target.value);
        }}
        placeholder="Search"
        type="text"
        className="bg-transparent outline-none w-full h-8 "
      ></input>
    </div>
  );
}

export default SearchBar;
