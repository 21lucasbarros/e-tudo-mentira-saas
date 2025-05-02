"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      console.log(`Subscribed with email: ${email}`);
      setSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <>
      <section className="py-16 bg-indigo-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Receba novidades e lançamentos
              </h2>
              <p className="mt-4 text-lg text-indigo-100">
                Assine nossa newsletter e fique por dentro das histórias que
                estamos inventando.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <form onSubmit={handleSubmit} className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Endereço de e-mail
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border-0 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 bg-white"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Inscrever-se
                  </button>
                </div>
              </form>
              {submitted && (
                <div className="mt-3 text-sm text-white bg-indigo-500 rounded-md p-3 animate-fade-in-down">
                  Obrigado por se inscrever! Em breve você receberá nossas
                  novidades.
                </div>
              )}
              <p className="mt-3 text-sm text-indigo-100">
                Prometemos não enviar spam. Você pode cancelar a qualquer
                momento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
