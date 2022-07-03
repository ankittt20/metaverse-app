import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from './ChangeUsername';

const Header = () => {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 text-pink-500 p-5 z-50 shadow-sm">
      <div className="grid grid-cols-5 md:grid-cols-6 items-end md:items-center">
        <div className="relative h-24 w-24 mx-auto hidden md:inline-grid">
          <Image
            className="object-cover rounded-full"
            src="https://designoholic.com/wp-content/uploads/2017/07/avatar-colored-d.png"
            layout="fill"
          />
        </div>

        <div className="col-span-4 text-left md:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <h1 className="text-3xl">Welcome to the Metaverse!</h1>

          <h2 className="text-4xl font-bold truncate">{user.get("username")}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
