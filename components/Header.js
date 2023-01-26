import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full">
        <input
          type="text"
          className="pl-5 outline-none bg-transparent flex-grow"
          placeholder="Search here"
        />
        <SearchIcon className="hidden md:inline-flex h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer mx-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6 " />
        </div>
      </div>
    </header>
  );
}

export default Header;
