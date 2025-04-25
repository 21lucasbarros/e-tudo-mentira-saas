"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginUserFormSchema) });

  function loginUser(data: any) {
    console.log(data);
  }

  return (
    <>
      <main className="flex flex-col gap-4 h-screen w-full items-center justify-center bg-gray-100 px-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-20 w-auto mb-10"
          loading="lazy"
          draggable="false"
        />

        <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 sm:p-8 md:p-10 shadow-md">
          <h1 className="text-center text-2xl font-bold">Boas-Vindas</h1>
          <p className="text-zinc-600 text-center">
            Faça seu login com e-mail e senha.
          </p>
          <form onSubmit={handleSubmit(loginUser)} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="email"
                  placeholder="seu@email.com"
                  className="block w-full pl-10 py-2 border-gray-300 rounded-md"
                  {...register("email")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Senha
              </Label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="block w-full pl-10 py-2 border-gray-300 rounded-md"
                  {...register("password")}
                />
              </div>
            </div>
            <Button className="w-full cursor-pointer">Enviar</Button>
          </form>
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Não possui cadastro?{" "}
          <a href="#">
            <span className="text-zinc-800 font-bold hover:underline">
              Registre-se
            </span>
          </a>
        </p>
      </main>
    </>
  );
}
