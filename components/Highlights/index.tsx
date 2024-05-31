import Link from "next/link";
import React from "react";
import { HighlightsItem, IconBase } from "..";
import Styles from "./styles.module.css";

type HighlightsProps = {
  title?: string;
};

export function Highlights({ title }: HighlightsProps) {
  const highlights = [
    {
      id: "1",
      name: "Stop Jeans",
      brandUrl: "/brands/stopp.svg",
      rating: 4.5,
      reviews: 1883,
      bonus: "Entrega grátis",
      distance: 4.3,
    },
    {
      id: "2",
      name: "Calzatodo",
      brandUrl: "/brands/calza.svg",
      rating: 4.5,
      reviews: 1883,
      bonus: "R$5,00 de entrega",
      distance: 5,
    },
    {
      id: "3",
      name: "Villa Romana",
      brandUrl: "/brands/villa.svg",
      rating: 5,
      reviews: 583,
      bonus: "Entrega grátis",
      distance: 2.2,
    },
    {
      id: "4",
      name: "Miamasvin",
      brandUrl: "/brands/miami.svg",
      rating: 5,
      reviews: 583,
      bonus: "Entrega grátis",
      distance: 6.5,
    },
    {
      id: "5",
      name: "¡Ay Guey!",
      brandUrl: "/brands/guaey.svg",
      rating: 5,
      reviews: 283,
      bonus: "Entrega grátis",
      distance: 8.3,
    },
    {
      id: "6",
      name: "JHT Home",
      brandUrl: "/brands/JHT.svg",
      rating: 4.4,
      reviews: 1123,
      bonus: "Compre 2 e ganhe 1",
      distance: 1.1,
    },
    {
      id: "6",
      name: "GIORGIO ARMANI",
      brandUrl: "/brands/armani.svg",
      rating: 4.4,
      reviews: 1123,
      bonus: "Compre 2 e ganhe 1",
      distance: 1.1,
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
          return <HighlightsItem key={index} {...highlight} />;
        })}
      </div>
    </div>
  );
}
