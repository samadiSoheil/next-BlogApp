"use client";
import useAuth from "@/context/AuthContextProvider";
import NavLink from "./NavLink";

const navLinks = [
  {
    id: 1,
    children: "خانه",
    path: "/",
  },
  {
    id: 2,
    children: "بلاگ ها",
    path: "/blogs",
  },
];

const Header = () => {
  const { user, isLoading } = useAuth();
  return (
    <header
      className={`sticky top-0 bg-secondary-0 py-5 border-b border-b-secondary-100 transition-all duration-200 shadow-sm z-20 ${
        isLoading ? "blur-sm opacity-70" : "blur-0 opacity-100"
      }`}
    >
      <nav className="container xl:max-w-screen-xl">
        <ul className="flex justify-between text-secondary-400 gap-x-2">
          <div className="flex  gap-x-8">
            {navLinks.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink path={item.path}>{item.children}</NavLink>
                </li>
              );
            })}
          </div>
          <li>
            {user ? (
              <NavLink path="/profile">پروفایل</NavLink>
            ) : (
              <NavLink path="/login">ورود</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
