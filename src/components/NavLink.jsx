"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, path }) => {
  const pathName = usePathname();
  return (
    <>
      <Link
        href={path}
        className={`hover:text-secondary-900 transition-all ease-out ${
          pathName === path ? "text-primary-900" : ""
        }`}
      >
        {children}
      </Link>
    </>
  );
};

export default NavLink;
