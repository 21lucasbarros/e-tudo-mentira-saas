"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { scrollToElement } from "@/utils/scrollToElement";

export default function Hero() {
  const [currentBook, setCurrentBook] = useState(0);

  const books = [
    {
      title: "O Primeiro Jiu-Jiteiro Analista de Dados",
      author: "Kallani Fernandes",
    },
    { title: "O Ato Criativo", author: "Rick Rubin" },
    { title: "A Arte do Vapo", author: "Erik Medeiros" },
    { title: "Como Sair de Qualquer Enrascada Legal", author: "Saul Goodman" },
    { title: "Rôles do Bruxo", author: "Ronaldinho Gaúcho" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBook((prev) => (prev + 1) % books.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-indigo-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Histórias que{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  nunca
                </span>
                <span
                  className="absolute -bottom-1 left-0 z-0 w-full h-2 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(90deg, #d8b4fe 0%, #c7d2fe 100%)",
                    borderRadius: "9999px",
                    opacity: 0.5,
                    display: "block",
                  }}
                ></span>
              </span>{" "}
              existiram
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Descubra livros incríveis que nunca foram escritos, de autores que
              nunca nasceram. Histórias fictícias que vão te transportar para
              mundos que não existem.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Começar gratuitamente
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="#como-funciona"
                onClick={scrollToElement}
                className="flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-indigo-600 shadow-sm border border-indigo-200 hover:bg-indigo-50 transition-all duration-200"
              >
                Como funciona
              </a>
            </div>
          </div>
          {/* Livros */}
          <div className="relative lg:pl-8">
            <div className="relative h-96 max-w-md mx-auto lg:max-w-none">
              <div className="absolute top-0 right-0 lg:right-4 w-56 h-80 bg-purple-100 rounded-lg shadow-lg transform rotate-6 transition-all duration-700 animate-float">
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex-1 bg-white rounded shadow-sm p-4 flex flex-col">
                    <div className="h-40 bg-indigo-200 rounded mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-16 left-0 lg:left-0 w-56 h-80 bg-indigo-100 rounded-lg shadow-lg transform -rotate-3 transition-all duration-700 animate-float-delayed">
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex-1 bg-white rounded shadow-sm p-4 flex flex-col">
                    <div className="h-40 bg-purple-200 rounded mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 lg:right-20 w-56 h-80 bg-pink-100 rounded-lg shadow-lg transform -rotate-6 transition-all duration-700 animate-float-reverse">
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div className="flex-1 bg-white rounded shadow-sm p-4 flex flex-col">
                    <div className="h-40 bg-pink-200 rounded mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-center text-base text-gray-500">
            Descubra o livro que{" "}
            <span className="inline-flex items-center font-medium text-indigo-600">
              nunca foi escrito
            </span>
          </p>
          <div className="relative h-16 mt-4 overflow-hidden">
            <div
              className="flex flex-col justify-center items-center transition-transform duration-1000 transform"
              style={{ transform: `translateY(-${currentBook * 4}rem)` }}
            >
              {books.map((book, index) => (
                <div
                  key={index}
                  className="h-16 flex flex-col items-center justify-center"
                >
                  <p className="text-xl font-serif font-medium text-gray-800">
                    {book.title}
                  </p>
                  <p className="text-sm text-gray-600">por {book.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
