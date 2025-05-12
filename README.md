# É Tudo Mentira™ - Micro SaaS de Livros Fictícios

🎯 Bem-vindo ao repositório do **"É Tudo Mentira™"**, um projeto de um Micro SaaS que oferece uma seleção de livros que nunca existiram. Histórias inventadas, autores fictícios e muita criatividade. Porque... é tudo mentira™!

Este projeto foi desenvolvido para treinar e aperfeiçoar meus conhecimentos em **Next.js**, **Tailwind CSS**, **Zod**, **React Hook Form** e **Lucide Icons**.

## Estrutura do Projeto

Abaixo está a estrutura do repositório:

```
└── 21lucasbarros-e-tudo-mentira-saas/
    └── src/
        ├── app/
        │   ├── globals.css
        │   ├── layout.tsx
        │   ├── page.tsx
        │   ├── login/
        │   │   └── page.tsx
        │   └── signup/
        │       └── page.tsx
        ├── components/
        │   ├── footer.tsx
        │   ├── header.tsx
        │   ├── hero.tsx
        │   ├── how-it-works.tsx
        │   ├── newsletter.tsx
        │   ├── pricing.tsx
        │   ├── testimonials.tsx
        │   └── ui/
        │       ├── button.tsx
        │       ├── form.tsx
        │       ├── input.tsx
        │       └── label.tsx
        ├── lib/
        │   └── utils.ts
        └── utils/
            └── scrollToElement.ts
```

### Diretórios e Arquivos:

- **`src/app/`**: Contém as páginas e layouts principais.

  - **`globals.css`**: Arquivo global de estilos.
  - **`layout.tsx`**: Layout padrão da aplicação.
  - **`page.tsx`**: Página inicial da aplicação.
  - **`login/`** e **`signup/`**: Páginas de login e cadastro de usuários.

- **`src/components/`**: Componentes reutilizáveis da aplicação.

  - **`footer.tsx`**: Rodapé da aplicação.
  - **`header.tsx`**: Cabeçalho da aplicação.
  - **`hero.tsx`**: Seção de herói na página inicial.
  - **`how-it-works.tsx`**: Explicação de como funciona o serviço.
  - **`newsletter.tsx`**: Formulário para inscrição na newsletter.
  - **`pricing.tsx`**: Detalhes de preços.
  - **`testimonials.tsx`**: Depoimentos dos usuários.
  - **`ui/`**: Componentes de interface como botões, formulários e campos de entrada.

- **`src/lib/`**: Funções utilitárias que ajudam no funcionamento do sistema.

  - **`utils.ts`**: Funções auxiliares.

- **`src/utils/`**: Funções auxiliares específicas.
  - **`scrollToElement.ts`**: Função para rolar até um elemento específico da página.

## Tecnologias Usadas

- **Next.js**: Framework React para criar aplicações web rápidas e escaláveis.
- **Tailwind CSS**: Framework de utilitários para criar designs modernos e responsivos.
- **Zod**: Biblioteca de validação de dados, usada para garantir a integridade dos dados de formulários e API.
- **React Hook Form**: Biblioteca para criar formulários no React de maneira simples e eficiente.
- **Lucide Icons**: Conjunto de ícones simples e personalizáveis usados na interface.

## Melhorias Planejadas

Ainda há muitas melhorias planejadas para o **"É Tudo Mentira™"**. Algumas das funcionalidades que pretendo adicionar incluem:

- **Método de pagamento via Stripe**: Para facilitar a aquisição de livros fictícios e tornar a plataforma mais interativa.
- **Expansão do catálogo de livros fictícios**: Incluir mais histórias e autores fictícios, sempre com criatividade.
- **Sistema de comentários e avaliações**: Permitir que os usuários interajam com os livros de maneira mais dinâmica.

## Como Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/21lucasbarros/e-tudo-mentira-saas.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd e-tudo-mentira-saas
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse `http://localhost:3000` ou veja o projeto em produção em [https://e-tudo-mentira-saas.vercel.app/](https://e-tudo-mentira-saas.vercel.app/).

## Contribuições

Sinta-se à vontade para contribuir com o projeto! Se você tiver ideias de novos livros fictícios, melhorias ou correções, fique à vontade para abrir um **pull request**.

---

**Porque... é tudo mentira™!** 🚀
