export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "Pensei que era zoeira, mas fiquei de cara… cada livro parece real mesmo, até dei um Google pra ver se existia kkkkk. Mostrei pros caras da academia e agora todo mundo quer virar escritor também. Muito brabo!",
      author: "João Del",
      role: "SQL Developer e amante de livros",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      content:
        "Ô trem bão, sô! Achei que era só mais uma lorota, mas o É Tudo Mentira™ é gud demais. As histórias parecem causos que a vó contava — só que com um toque de ficção das boas.",
      author: "Indalecio Olivo",
      role: "Pastor digital e mineiro raiz",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      content:
        "Se o Santos jogasse com metade da criatividade desses livros, a gente já tava com uns 3 Mundial. Mas não… pelo menos aqui eu leio umas ficção que presta. Melhor que sofrer no Brasileirão COM PORRA DE LEO GODOY.",
      author: "Brunow Barros",
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
                  <svg
                    key={i}
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
