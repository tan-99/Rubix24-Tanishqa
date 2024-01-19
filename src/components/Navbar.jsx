import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Service", link: "/" },
    { name: "About", link: "/" },
    { name: "FAQs", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let navigate = useNavigate();

  let [open, setOpen] = useState(false);

  return (
    <div className="block shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex md:items-center justify-between py-4 bg-pink-600 bg-opacity-100 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-amber-400">
          <span></span>
          Shreni
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-7 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15 opacity-100 shadow-md" : "top-[-470px]"
          } md-opacity-100 `}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href="{link.link}"
                className="text-zinc-50 hover:text-amber-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}

          <button
            onClick={() => navigate("/signup")}
            className="bg-pink-600 text-amber-400 font-bold border-2 border-amber-400 py-2 px-4 rounded md:ml-8 hover:bg-amber-400 hover:text-pink-600 duration-500 flex items-center uppercase"
          >
            Login with{" "}
            <span className="text-2xl ml-2">
              {" "}
              <ion-icon name="logo-github"></ion-icon>{" "}
            </span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
