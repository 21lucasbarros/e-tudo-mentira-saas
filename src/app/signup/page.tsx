"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const signupUserFormSchema = z
  .object({
    name: z.string().nonempty("Nome é obrigatório."),
    email: z
      .string()
      .nonempty("E-mail é obrigatório.")
      .email("Formato de e-mail inválido"),
    password: z
      .string()
      .nonempty("Senha é obrigatória.")
      .min(6, "A senha precisa ter no mínimo 6 caracteres"),
    confirmPassword: z.string().nonempty("Confirme sua senha."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export default function SignupPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupUserFormSchema) });

  type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  function signupUser(data: FormData) {
    console.log(data);
    router.push("/");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <Link href="/" className="mb-8 flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 w-auto"
            loading="lazy"
            draggable="false"
          />
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            É Tudo Mentira™
          </h1>
        </Link>

        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Crie sua conta
            </h2>
            <p className="text-gray-600">
              Comece sua jornada por histórias extraordinárias
            </p>
          </div>

          <form onSubmit={handleSubmit(signupUser)} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Nome completo
              </Label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  className="pl-10 py-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("name")}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="pl-10 py-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
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
                  className="pl-10 py-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirme sua senha
              </Label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 py-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("confirmPassword")}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-200 transform hover:-translate-y-1">
              Criar conta
            </Button>
          </form>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Já tem uma conta?{" "}
          <Link
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
          >
            Fazer login
          </Link>
        </p>
      </div>
    </main>
  );
}
