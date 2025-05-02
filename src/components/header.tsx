"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToElement } from "@/utils/scrollToElement";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white text-black">
      <div className="mx-auto flex max-w-1xl items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-auto"
            loading="lazy"
            draggable="false"
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            É Tudo Mentira™
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <ul className="flex flex-row gap-6 items-center">
            <li className="hover:text-indigo-600 transition-colors duration-200">
              <a href="#como-funciona" onClick={scrollToElement}>
                Como Funciona
              </a>
            </li>
            <li className="hover:text-indigo-600 transition-colors duration-200">
              <a href="#livros" onClick={scrollToElement}>
                Livros
              </a>
            </li>
            <li className="hover:text-indigo-600 transition-colors duration-200">
              <a href="#depoimentos" onClick={scrollToElement}>
                Depoimentos
              </a>
            </li>
            <li className="hover:text-indigo-600 transition-colors duration-200">
              <a href="#precos" onClick={scrollToElement}>
                Preços
              </a>
            </li>
          </ul>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition duration-200">
            <Link href="/login" className="text-white">
              Começar
            </Link>
          </button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="#"
            onClick={scrollToElement}
            className="block hover:text-gray-900 hover:underline"
          >
            Sobre
          </a>
          <a
            href="#"
            onClick={scrollToElement}
            className="block hover:text-gray-900 hover:underline"
          >
            Depoimentos
          </a>
          <a
            href="#"
            onClick={scrollToElement}
            className="block hover:text-gray-900 hover:underline"
          >
            Assinar
          </a>
          <Link
            href="/login"
            className="block bg-zinc-100 px-4 py-2 rounded-md hover:bg-zinc-200 transition duration-200 text-center text-gray-700 hover:text-gray-900 hover:underline"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
