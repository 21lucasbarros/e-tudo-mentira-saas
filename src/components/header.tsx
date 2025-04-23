import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div className="flex items-center justify-between py-5 px-10 text-black border-b bg-white border-gray-200">
          <h1 className="text-xl font-bold">É Tudo Mentira™</h1>
          <nav className="space-x-4">
            <Link
              href="/login"
              className="text-gray-700 hover:text-gray-900 hover:underline"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
