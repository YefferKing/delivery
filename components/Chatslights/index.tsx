import Link from "next/link";
import React from "react";
import { ChatslightsItem, HighlightsItem, IconBase } from "..";
import Styles from "./styles.module.css";

type ChatslightsProps = {
  title?: string;
};

export function Chatslights({ title }: ChatslightsProps) {
  const highlights = [
    {
      id: "1",
      name: "Stop Jeans",
      brandUrl: "/brands/stopp.svg",
      rating: 4.5,
      reviews: 1883
    },
    {
      id: "2",
      name: "Calzatodo",
      brandUrl: "/brands/calza.svg",
      rating: 4.5,
      reviews: 1883
    },
    {
      id: "3",
      name: "Villa Romana",
      brandUrl: "/brands/villa.svg",
      rating: 5,
      reviews: 583
    },
    {
      id: "4",
      name: "Miamasvin",
      brandUrl: "/brands/miami.svg",
      rating: 5,
      reviews: 583
    },
    {
      id: "5",
      name: "¡Ay Guey!",
      brandUrl: "/brands/guaey.svg",
      rating: 5,
      reviews: 283
    },
    {
      id: "6",
      name: "JHT Home",
      brandUrl: "/brands/JHT.svg",
      rating: 4.4,
      reviews: 1123
    },
    {
      id: "6",
      name: "GIORGIO ARMANI",
      brandUrl: "/brands/armani.svg",
      rating: 4.4,
      reviews: 1123
    }
  ];

  return (
    <div className="mb-12">
      <div className={Styles.header}>
        <div className="flex flex-col justify-center items-center"></div>
        <h2>{title ? title : "Marcas Detacadas"}</h2>
        <Link href="/destaques">
          <a>
            Ver todos
            <IconBase iconName="chevron-right" color="#5b4aa3" size={12} />
          </a>
        </Link>
      </div>
      <div className="flex gap-6 justify-between flex-wrap">
        {highlights.map((highlight, index) => {
          return <ChatslightsItem key={index} {...highlight} />;
        })}
      </div>
    </div>
  );
}
