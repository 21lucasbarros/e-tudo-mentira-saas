import { Book, Search, Gift, LibraryBig } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Assine o serviço",
      description:
        "Escolha o plano que melhor se adapta às suas necessidades de leitura fictícia.",
      icon: <Book className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Receba livros mensais",
      description:
        "Todo mês, novos livros fictícios são adicionados à sua biblioteca pessoal.",
      icon: <LibraryBig className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Explore histórias únicas",
      description:
        "Leia histórias criadas especialmente para você, que nunca existiram em lugar nenhum.",
      icon: <Search className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Compartilhe com amigos",
      description:
        "Indique livros fictícios para seus amigos e ganhe meses grátis de assinatura.",
      icon: <Gift className="h-8 w-8 text-indigo-600" />,
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Como funciona
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            É simples: criamos livros que nunca existiram, para pessoas que
            adoram descobrir novas histórias.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-2xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-base text-gray-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-16 h-2 transform -translate-x-8">
                  <div className="h-0.5 w-full bg-indigo-200"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-45 w-2.5 h-0.5 bg-indigo-200"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -rotate-45 w-2.5 h-0.5 bg-indigo-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
