"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { brandsLinks } from "@/constants";

{
  /* DropDown Menu */
}

const DropdownMenu = () => {
  return (
    <div className="bg-white transition ease-in duration-1000 absolute shadow-xl rounded-sm z-10 top-14">
      <ul className="list-none w-48">
        {brandsLinks.map(({ name, path }, i: number) => {
          const hideSeparator = brandsLinks.length - 1 === i;
          return (
            <>
              <li
                key={i}
                className="transition-all duration-3000 hover:bg-purple-600 hover: cursor-pointer text-black hover:text-white rounded-sm font-medium h-12"
              >
                <Link
                  href={path}
                  className="h-full w-full flex justify-start items-center p-2"
                >
                  {name}
                </Link>
              </li>
              {hideSeparator ? null : <Separator />}
            </>
          );
        })}
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
      className="relative h-full w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex justify-center items-center h-full w-full">
        {title}
      </button>
      {/* <DropdownMenu /> */}
      {isDropdownVisible && <DropdownMenu />}
    </div>
  );
};

export default Dropdown;
