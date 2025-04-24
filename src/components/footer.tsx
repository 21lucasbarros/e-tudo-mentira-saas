import { Instagram, Facebook, TwitterIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto"
                loading="lazy"
                draggable="false"
              />
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                É Tudo Mentira™
              </h3>
            </div>
            <p className="mt-4 max-w-md text-sm text-gray-400">
              Criamos histórias fictícias, autores que nunca existiram e uma
              experiência literária única para alimentar sua imaginação.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h4 className="text-base font-medium text-white">Produto</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Como funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Preços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-medium text-white">Empresa</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Carreiras
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Autores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Depoimentos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-medium text-white">Legal</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Termos de uso
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Direitos autorais
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} É Tudo Mentira™. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-gray-500 mt-4 md:mt-0">
            Os livros, autores e histórias apresentados são fictícios. Qualquer
            semelhança com obras reais é mera coincidência.
          </p>
        </div>
      </div>
    </footer>
  );
}
