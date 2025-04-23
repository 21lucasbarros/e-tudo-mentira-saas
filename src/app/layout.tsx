import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "É Tudo Mentira™",
  description: "A maior plataforma livros sobre (des)informação do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
