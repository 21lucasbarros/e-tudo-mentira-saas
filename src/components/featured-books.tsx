"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, BookOpenCheck } from "lucide-react";

export default function FeaturedBooks() {
  const books = [
    {
      id: 1,
      title: "O Primeiro Jiu-Jiteiro Homossexual",
      author: "Kallani Fernandes",
      cover: "",
      description:
        "Uma biografia corajosa e inspiradora que mistura esporte, identidade e resistência. A história de um lutador que enfrentou preconceitos dentro e fora dos tatames.",
      genres: ["Biografia", "LGBTQIA+", "Esportes"],
      rating: 4.7,
    },
    {
      id: 2,
      title: "O Ato Criativo",
      author: "Rick Rubin",
      cover: "",
      description:
        "Rick Rubin compartilha reflexões profundas sobre o processo de criação artística, a importância do silêncio e como a arte pode ser um portal para a transcendência.",
      genres: ["Autoconhecimento", "Criatividade", "Filosofia"],
      rating: 4.9,
    },
    {
      id: 3,
      title: "A Arte do Vapo",
      author: "Erik Medeiros",
      cover: "",
      description:
        "O manual do Vapisco: aprenda a dar jack nas novinhas, mandar elas deitarem e viver o embraze no modo 'chama que vem'.",
      genres: ["Cultura Pop", "Lifestyle", "Não-ficção"],
      rating: 4.5,
    },
    {
      id: 4,
      title: "Manifesto Comunista",
      author: "Friedrich Engels e Karl Marx",
      cover: "",
      description:
        "Um dos textos políticos mais influentes da história, que propõe a revolução proletária e questiona as estruturas do capitalismo industrial.",
      genres: ["Política", "Filosofia", "História"],
      rating: 4.8,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [booksToShow, setBooksToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setBooksToShow(window.innerWidth >= 1024 ? 3 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayBooks = books.slice(currentIndex, currentIndex + booksToShow);

  const nextSlide = () => {
    if (currentIndex < books.length - booksToShow) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(books.length - booksToShow);
    }
  };

  return (
    <section id="livros" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Livros em destaque
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Histórias cuidadosamente criadas por nossos autores imaginários.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="flex space-x-6 overflow-hidden">
            {displayBooks.map((book, index) => (
              <div
                key={book.id}
                className="w-full lg:w-1/3 flex-shrink-0 transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-200">por {book.author}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex mb-3">
                      {book.genres.map((genre) => (
                        <span
                          key={genre}
                          className="text-xs mr-2 px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                    <p className="text-base text-gray-600 h-24 overflow-hidden">
                      {book.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`h-5 w-5 ${
                                i < Math.floor(book.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {book.rating.toFixed(1)}
                        </span>
                      </div>
                      <button className="inline-flex items-center rounded-md bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-100 transform transition-all duration-300 hover:-translate-y-1">
                        <BookOpenCheck className="mr-1.5 h-4 w-4" />
                        Ler amostra
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 focus:outline-none z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {books.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                index >= currentIndex &&
                index < currentIndex + (window.innerWidth >= 1024 ? 3 : 1)
                  ? "bg-indigo-600"
                  : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
