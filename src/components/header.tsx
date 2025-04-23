import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div className="flex items-center justify-between py-5 px-10 text-black border-b bg-white border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto"
              loading="lazy"
              draggable="false"
            />
            <h1 className="text-xl font-bold">É Tudo Mentira™</h1>
          </div>

          <nav className="space-x-4 flex gap-4 text-gray-700">
            <ul className="flex flex-row gap-4 text-gray-700 items-center">
              <li className="hover:text-gray-900 hover:underline">
                <a href="#">Sobre</a>
              </li>
              <li className="hover:text-gray-900 hover:underline">
                <a href="#">Depoimentos</a>
              </li>
              <li className="hover:text-gray-900 hover:underline">
                <a href="#">Assinar</a>
              </li>
            </ul>
            <button className="bg-zinc-100 px-4 py-2 rounded-md hover:bg-zinc-200 transition duration-200">
              <Link
                href="/login"
                className="text-gray-700 hover:text-gray-900 hover:underline"
              >
                Login
              </Link>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
