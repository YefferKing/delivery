import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { PageHead } from "@/components";
import type { NextPage } from "next";
import Link from "next/link";

const Login: NextPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    // Simulación de autenticación
    if (email === "mahomy@gmail.com" && password === "123") {
      setMessage("¡Autenticación exitosa!");
      // Redirigir a la pantalla ./explore
      router.push('/');
    } else {
      setMessage("Correo electrónico o contraseña incorrectos.");
    }
  };

  return (
    <>
      <PageHead
        title="Login"
        description="Inicia sesión en B2B"
        keywords="login"
      />
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="bg-indigo-200 md:basis-full lg:basis-4/12 lg:rounded-r-3xl">
          <img src="../B2B.png" alt="Stop Jeans" width="980%" />
        </div>
        <div className="lg:basis-8/12 flex">
          <div className="max-w-2xl w-4/5 m-auto">
            <h1 className="font-bold text-4xl mb-3">Bienvenido!</h1>
            <p className="text-slate-700 mb-6">
              Autentifíquese para seguir utilizando nuestro servicio.
            </p>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Correo electrónico</label>
              <input
                ref={emailRef}
                type="email"
                placeholder="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Contraseña</label>
              <input
                ref={passwordRef}
                type="password"
                placeholder="Contraseña"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={handleLogin}>Entrar</button>
            {message && (
              <p className={`mt-4 ${message.includes("exitosa") ? "text-green-600" : "text-red-600"}`}>
                {message}
              </p>
            )}
            <div className="text-center p-6">
              <Link href="/forgot">
                <a className="text-slate-400 hover:text-slate-900 transition-colors">
                  Recuperar contraseña
                </a>
              </Link>
            </div>
            <Link href="/register">
              <a className="block bg-indigo-600 w-full p-4 text-white text-lg rounded-xl text-center font-bold hover:opacity-90 transition-opacity">
                Crear una cuenta
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
