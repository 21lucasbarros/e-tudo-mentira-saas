"use client";

import { Button } from "@/components/ui/button";
import Form from "@/components/ui/form";
import { Lock, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-4 h-screen w-full items-center justify-center bg-gray-100">
      <div className="w-[400px] max-w-2xl space-y-8 rounded-lg bg-white p-10 shadow-md items-center justify-center">
        <h1 className="text-center text-2xl font-bold">Boas-Vindas</h1>
        <p className="text-zinc-600 text-center">
          Faça seu login com e-mail e senha.
        </p>
        <Form
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div className="flex gap-2 items-center">
            <Label htmlFor="email">
              <User className="w-5 h-5" />
            </Label>
            <Input id="email" placeholder="Email"></Input>
          </div>

          <div className="flex gap-2 items-center">
            <Label htmlFor="password">
              <Lock className="w-5 h-5" />
            </Label>
            <Input id="password" placeholder="Senha"></Input>
          </div>

          <Button className="w-full">Enviar</Button>
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
