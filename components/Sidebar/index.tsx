import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/router'; // Importa useRouter
import { IconBase, UserProfile } from "..";
import Styles from "./styles.module.css";

export function Sidebar() {
  const router = useRouter(); // Usa useRouter
  const { pathname } = router; // Obtén la ruta actual

  return (
    <div>
      <div className={Styles.sidebar}>
        <div className={Styles.header}>
          <Image
            src="/B2B.png"
            width={70}
            height={60}
            alt="B2B"
          />
          <h3>MARKETPLACE B2B</h3>
        </div>
        <ul className={Styles.menu}>
          {/* Renderiza el enlace de inicio de sesión primero si la ruta actual es '/login' */}
          {pathname === '/login' && (
            <li className={Styles.active}>
              <Link href="/login">
                <a>
                  <span>
                    <IconBase iconName="login" color="#a3a3a4" />
                  </span>
                  Iniciar sesión
                </a>
              </Link>
            </li>
          )}
          {/* Renderiza los otros enlaces solo si la ruta actual no es '/login' */}
          {pathname !== '/login' && (
            <>
              <li className={pathname === '/' ? Styles.active : ''}>
                <Link href="/">
                  <a>
                    <span>
                      <IconBase iconName="home" color="#a3a3a4" />
                    </span>
                    Home
                  </a>
                </Link>
              </li>
              <li className={pathname === '/explore' ? Styles.active : ''}>
                <Link href="/explore">
                  <a>
                    <span>
                      <IconBase iconName="feed" color="#a3a3a4" />
                    </span>
                    Explorar
                  </a>
                </Link>
              </li>
              <li className={pathname === '/chats' ? Styles.active : ''}>
                <Link href="/chats">
                  <a>
                    <span>
                      <IconBase iconName="letter" color="#a3a3a4" />
                    </span>
                    Mensajería
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className={Styles.footer}>
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
