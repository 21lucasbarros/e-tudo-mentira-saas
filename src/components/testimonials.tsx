import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "A plataforma superou minhas expectativas. Os livros apresentados são envolventes e a experiência de leitura é extremamente agradável. Recomendo para todos que buscam inovação no universo literário.",
      author: "João Del",
      role: "SQL Developer e entusiasta de literatura",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      content:
        "Fiquei impressionado com a qualidade das obras e a facilidade de navegação. O É Tudo Mentira™ proporciona uma experiência única para quem aprecia boas histórias.",
      author: "Indalecio Olivo",
      role: "Pastor digital e leitor assíduo",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      content:
        "A curadoria dos livros é excelente e o ambiente é muito acolhedor para novos leitores. Sem dúvida, uma ótima iniciativa para fomentar a leitura e a criatividade.",
      author: "Pedro Cardoso",
      role: "Especialista em Computação Quântica",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            O que nossos leitores dizem
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Depoimentos de pessoas que descobriram o prazer de ler livros que
            não existem.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-base font-medium text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="mt-6 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
