import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IconBase, UserProfile } from "..";
import Styles from "./styles.module.css";

export function Sidebar() {
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
          <li className={Styles.active}>
            <Link href="/">
              <a>
                <span>
                  <IconBase iconName="home" color="#fff" />
                </span>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <a>
                <span>
                  <IconBase iconName="feed" color="#a3a3a4" />
                </span>
                Explorar
              </a>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <a>
                <span>
                  <IconBase iconName="letter" color="#a3a3a4" />
                </span>
                Mensajeria
              </a>
            </Link>
          </li>
        </ul>
        <div className={Styles.footer}>
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
