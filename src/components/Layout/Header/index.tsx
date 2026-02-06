// Imports Hooks
import Link from "next/link";

import NavBar from "./NavBar/";
import Logo from "../Logo";

export default function Header() {

  return (

    <header className="sticky top-0 z-50 flex items-center justify-between bg-white/90 dark:bg-background-dark p-4 transition-all duration-300 border-b border-gray-200 dark:border-transparent">
      <Link href="/" className="flex items-center gap-3">
        <Logo />
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">JEG Dev Studios</p>
      </Link>
      <NavBar />
    </header>
  );
}