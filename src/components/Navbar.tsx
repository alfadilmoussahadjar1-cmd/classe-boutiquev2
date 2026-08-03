"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Heart } from "lucide-react";


export default function Navbar() {

  return (

    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-5 border-b bg-white">


      {/* Logo */}

      <Link href="/">
        <Image
          src="/Logo_classe_boutique.png"
          alt="Logo Classe Boutique"
          width={220}
          height={90}
          priority
        />
      </Link>



      {/* Menu */}

      <div className="hidden md:flex items-center gap-10 uppercase tracking-[0.2em] text-sm font-medium">


        <Link
          href="/"
          className="relative hover:text-gray-500 transition group"
        >
          Accueil
          <span className="absolute left-0 -bottom-2 w-0 h-px bg-black transition-all group-hover:w-full"></span>
        </Link>



        <Link
          href="/boutique"
          className="relative hover:text-gray-500 transition group"
        >
          Boutique
          <span className="absolute left-0 -bottom-2 w-0 h-px bg-black transition-all group-hover:w-full"></span>
        </Link>



        <Link
          href="/about"
          className="relative hover:text-gray-500 transition group"
        >
          À propos
          <span className="absolute left-0 -bottom-2 w-0 h-px bg-black transition-all group-hover:w-full"></span>
        </Link>



        <Link
          href="/contact"
          className="relative hover:text-gray-500 transition group"
        >
          Contact
          <span className="absolute left-0 -bottom-2 w-0 h-px bg-black transition-all group-hover:w-full"></span>
        </Link>


      </div>



      {/* Icônes */}

      <div className="flex items-center gap-5">


        <Search
          size={22}
          className="cursor-pointer hover:text-gray-500"
        />


        <Heart
          size={22}
          className="cursor-pointer hover:text-red-500"
        />


        <ShoppingBag
          size={22}
          className="cursor-pointer hover:text-gray-500"
        />


      </div>


    </nav>

  );

}