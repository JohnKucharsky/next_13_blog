import React from "react";
import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={"p-4 sticky top-0 shadow z-10"}>
      <div
        className={
          "prose prose-xl mx-auto flex justify-between flex-col sm:flex-row"
        }
      >
        <h1
          className={
            "text-3xl font-bold text-gray-900" +
            " grid place-content-center mb-2 md:mb-0"
          }
        >
          <Link
            href={"/"}
            className={"text-black/90 no-underline hover:text-black"}
          >
            Ivan
          </Link>
        </h1>
        <div
          className={
            "flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-gray-600 text-4xl" +
            " lg:text-5xl"
          }
        >
          <FaYoutube />
          <FaTwitter />
          <FaGithub />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
