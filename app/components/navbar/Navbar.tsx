"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Links, NavbarLinks, session } from "./NavbarLinks";

const Navbar = () => {
  const pathName = usePathname();

  const getLinkClass = (link:Links) => {
    return link.pathname === pathName ? "bg-white text-gray-800 rounded-lg px-1" : "";
  };

  console.log(pathName);
  return (
    <>
      <div className="flex justify-around items-center m-2">
        <div>Logo</div>
        <div className="grid grid-cols-6 gap-5">
          {NavbarLinks.map((link) => (
            <Link
              key={link.title}
              className={`${
                link.title === "Blog" && "ml-3"
              } hover:text-red-300 ${getLinkClass(link)} text-sm`}
              href={link.pathname}
            >
              {link.title}
            </Link>
          ))}
          <button className="btn btn-xs border-t-neutral-400">{session ? 'Logout' : 'Login'}</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
