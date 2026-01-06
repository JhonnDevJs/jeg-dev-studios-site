// Imports Hooks
import Link from "next/link";

import NavBar from "./NavBar/";
import Logo from "../Logo";

export default function Header() {
  
  return (

    <header className="sticky top-0 z-50 flex items-center justify-between bg-background-dark/90 backdrop-blur-md p-4 transition-all duration-300">
      <Link href="/" className="flex items-center gap-3">
        <Logo />
        <h1 className="text-lg font-bold tracking-tight text-white">JEG Dev Studios</h1>
      </Link>
      <NavBar/>
    </header>
  );
}