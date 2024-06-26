import { Button, InputText, PageHead } from "@/components";
import type { NextPage } from "next";
import Link from "next/link";

const Forgot: NextPage = () => {
  return (
    <>
      <PageHead
        title="Recuperar senha"
        description="Recupere a sua senha para acessar o Nibble Restaurantes."
        keywords="recuperar senha, nibble, nibble restaurantes"
      />
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="bg-indigo-200 md:basis-full lg:basis-4/12 lg:rounded-r-3xl">
        <img src="../B2B.png" alt="Stop Jeans" width="980%" />
        </div>
        <div className="lg:basis-8/12 flex">
          <div className="max-w-2xl w-4/5 m-auto">
            <h1 className="font-bold text-4xl mb-3">¿Olvidaste tu contraseña?</h1>
            <p className="text-slate-700 mb-6">
              Autentícate para seguir usando nuestro servicio.
            </p>
            <InputText
              label="E-mail"
              type="email"
              placeholder="Ingrese su e-mail "
            />

            <Button className="bg-indigo-600 text-white">Continuar</Button>
            <div className="text-center p-6">
              <Link href="/login">
                <a className="text-slate-400 hover:text-slate-900 transition-colors">
                 Volver al inicio de sesión
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
