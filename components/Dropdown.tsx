"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";

{
  /* DropDown Menu */
}

const DropdownMenu = () => {
  return (
    <div className="bg-white transition ease-in duration-1000 absolute shadow-xl rounded-sm">
      <ul className="list-none w-48">
        <li className="transition-all duration-3000 hover:bg-purple-600 hover: cursor-pointer text-black hover:text-white p-2 rounded-sm font-medium">
          Hot Wheels
        </li>
        <Separator />
        <li className="transition-all duration-3000 hover:bg-purple-600 hover: cursor-pointer text-black hover:text-white p-2 rounded-sm">
          Barbie
        </li>
        <Separator />
        <li className="transition-all duration-3000 hover:bg-purple-600 hover: cursor-pointer text-black hover:text-white p-2 rounded-sm">
          Win Magic
        </li>
      </ul>
    </div>
  );
};

{
  /* Dropdown */
}

const Dropdown = ({ title }: { title: string }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button>{title}</button>
      {/* <DropdownMenu /> */}
      {isDropdownVisible && <DropdownMenu />}
    </div>
  );
};

export default Dropdown;
