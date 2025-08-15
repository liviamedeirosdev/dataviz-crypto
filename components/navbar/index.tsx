// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
  className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%]
   border-white/25 rounded-2xl
  bg-[rgba(0,0,0,0.25)]
  shadow-[inset_0_0_20px_rgba(255,255,255,0.35)]
  backdrop-blur-md text-white z-50"
>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold">
                            Dataviz
                        </Link>
                    </div>
                    
                    {/* Links desktop */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="hover:text-gray-300 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-gray-300 transition-colors">
                            About
                        </Link>
                        <Link href="/services" className="hover:text-gray-300 transition-colors">
                            Services
                        </Link>
                        <Link href="/contact" className="hover:text-gray-300 transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Botão mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                        >
                            {isOpen ? "✖" : "☰"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile */}
            {isOpen && (
                <div className="md:hidden bg-gray-800/80 backdrop-blur-md rounded-b-2xl px-4 pb-4 space-y-2">
                    <Link href="/" className="block hover:text-gray-300 transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="block hover:text-gray-300 transition-colors">
                        About
                    </Link>
                    <Link href="/services" className="block hover:text-gray-300 transition-colors">
                        Services
                    </Link>
                    <Link href="/contact" className="block hover:text-gray-300 transition-colors">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
