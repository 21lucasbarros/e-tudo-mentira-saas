"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      id: "basic",
      name: "Leitor Casual",
      description: "Para quem quer experimentar histórias fictícias",
      price: annual ? "R$19,90" : "R$24,90",
      period: annual ? "/ano" : "/mês",
      savings: annual ? "Economize R$60" : null,
      features: [
        "1 livro fictício por mês",
        "Acesso à biblioteca básica",
        "Formato digital",
        "Suporte por email",
      ],
      cta: "Começar teste grátis",
      popular: false,
    },
    {
      id: "pro",
      name: "Bibliófilo",
      description: "Para os apaixonados por literatura imaginária",
      price: annual ? "R$39,90" : "R$49,90",
      period: annual ? "/ano" : "/mês",
      savings: annual ? "Economize R$120" : null,
      features: [
        "3 livros fictícios por mês",
        "Acesso à biblioteca completa",
        "Formatos digital e áudio",
        "Conteúdo exclusivo de autores",
        "Clube de leitura mensal",
        "Suporte prioritário",
      ],
      cta: "Assinar agora",
      popular: true,
    },
    {
      id: "premium",
      name: "Colecionador",
      description: "Para quem quer a experiência completa",
      price: annual ? "R$59,90" : "R$69,90",
      period: annual ? "/ano" : "/mês",
      savings: annual ? "Economize R$180" : null,
      features: [
        "5 livros fictícios por mês",
        "Acesso ilimitado à biblioteca",
        "Formatos digital, áudio e impresso*",
        "Capa dura personalizada",
        "Histórias sob demanda",
        "Acesso antecipado a lançamentos",
        "Comunidade VIP com autores",
      ],
      cta: "Assinar agora",
      popular: false,
    },
  ];

  return (
    <section id="precos" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Planos de assinatura
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Escolha o plano ideal para sua jornada literária fictícia.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <span
              className={`text-sm ${
                !annual ? "font-medium text-gray-900" : "text-gray-500"
              }`}
            >
              Mensal
            </span>
            <button
              className="relative mx-4 flex h-6 w-12 items-center rounded-full bg-indigo-600 px-0.5 transition-colors focus:outline-none"
              onClick={() => setAnnual(!annual)}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  annual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`flex items-center text-sm ${
                annual ? "font-medium text-gray-900" : "text-gray-500"
              }`}
            >
              Anual
              <span className="ml-2 inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                Economize 20%
              </span>
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-lg ${
                plan.popular
                  ? "border-2 border-indigo-600 shadow-xl"
                  : "border border-gray-200 shadow-sm"
              } overflow-hidden bg-white transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -mr-1 -mt-1 overflow-hidden h-24 w-24">
                  <div className="absolute transform rotate-45 bg-indigo-600 text-white text-center text-xs font-semibold py-1 left-[-24px] top-[32px] w-[170px]">
                    Mais popular
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 h-10">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-lg text-gray-500">
                    {plan.period}
                  </span>
                </div>
                {plan.savings && (
                  <p className="mt-1 text-sm text-green-600">{plan.savings}</p>
                )}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <button
                  className={`w-full rounded-md ${
                    plan.popular
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : "bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                  } py-3 px-4 text-base font-medium transition-colors duration-200`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          * Livros impressos enviados trimestralmente. Frete não incluso.
        </p>
      </div>
    </section>
  );
}
