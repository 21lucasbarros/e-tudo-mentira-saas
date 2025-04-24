"use client";

import { Button } from "@/components/ui/button";
import Form from "@/components/ui/form";
import { Lock, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function inputsValidation() {
    if (!email || !password) {
      setError("Preencha todos os campos.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email inválido.");
      return false;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return false;
    }

    setError("");
    return true;
  }

  function handleLogin() {
    if (inputsValidation()) {
      console.log("Login bem-sucedido com:", { email, password });
      router.push("/");
    }
  }

  return (
    <div className="flex flex-col gap-4 h-screen w-full items-center justify-center bg-gray-100 px-4">
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

        <Form
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          <Button className="w-full cursor-pointer" onClick={handleLogin}>
            Enviar
          </Button>
        </Form>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500">
        Não possui cadastro?{" "}
        <a href="#">
          <span className="text-zinc-800 font-bold hover:underline">
            Registre-se
          </span>
        </a>
      </p>
    </div>
  );
}
