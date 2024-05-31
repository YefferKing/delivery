import Link from "next/link";
import React from "react";
import { Category, IconBase } from "..";
import Styles from "./styles.module.css";

export function Categories() {
  const categories = [
    {
      id: "1",
      name: "Popular",
      legend: "+286 opciones",
      iconName: "fire",
      backgroundColor: "#fb6d3a",
    },
    {
      id: "2",
      name: "Exportaciones",
      legend: "+1.856 opciones",
      iconName: "airplane",
      backgroundColor: "#503e9d",
    },
    {
      id: "6",
      name: "Mas Cercanos",
      legend: "+55 opciones",
      iconName: "map",
      backgroundColor: "#facd5d",
    },
  ];

  return (
    <div className="mb-12">
      <div className={Styles.header}>
        <h2 className="grow">Explorar Categorias</h2>
        <Link href="/categories/1">
          <a>
            Ver todas
            <IconBase iconName="chevron-right" color="#5b4aa3" size={12} />
          </a>
        </Link>
      </div>
      <div className="flex gap-6 justify-between">
        {categories.map((category) => (
          <Category key={category.name} {...category} />
        ))}
      </div>
    </div>
  );
}
