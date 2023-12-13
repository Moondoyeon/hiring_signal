"use client";

import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-transparent flex justify-between items-center px-8 py-4 border-b border-white">
      <a href="/">
        <h1 className="w-fit border-y border-white text-3xl font-semibold text-white">
          채용시그널
        </h1>
      </a>
      <ul className="flex justify-between text-2xl font-semibold text-white">
        <Link to="/main/#work" smooth={true} className="ml-6 cursor-pointer">
          WORK
        </Link>
        <Link to="/main/#project" smooth={true} className="ml-6 cursor-pointer">
          PROJECT
        </Link>
        <Link to="/main/#study" smooth={true} className="ml-6 cursor-pointer">
          STUDY
        </Link>
        <Link to="/main/#signal" smooth={true} className="ml-6 cursor-pointer">
          SIGNAL
        </Link>
      </ul>
    </header>
  );
}
