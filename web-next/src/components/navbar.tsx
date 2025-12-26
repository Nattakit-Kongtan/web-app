"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 text-black font-weight:bold px-4 py-3 flex justify-between items-center shadow-md z-50">
      {/* Logo */}
      <div className="text-lg font-bold">
        {/* <Link href="/">
            <Image 
            src="/globe.svg"    
            alt="MyApp Logo"
            width={120}
            height={40}
            priority
            />
        </Link> */}
        </div>

      <button
        className="md:hidden bg-blue-500 px-3 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* ลิงก์เมนู */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex space-x-4 absolute md:static top-14 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent p-4 md:p-0`}
      ><Link href="/" className="block md:inline-block hover:underline text-black font-bold">
        Home
        </Link>
        <Link href="/about" className="block md:inline-block hover:underline text-black font-bold">
        About
        </Link>
        <Link href="/contact" className="block md:inline-block hover:underline text-black font-bold">
        Contact
        </Link>
      </div>
    </nav>
  );
}
