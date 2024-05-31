import React from "react";
import { FoodItem } from "..";
import Styles from "./styles.module.css";

export function Foods() {
  const foods = [
    {
      id: "1",
      name: "Jean",
      imageUrl: "/foods/1.jpeg",
      deliveryFee: "Entrega grátis",
      rating: 4.6,
      reviews: 77,
      category: "Jean",
      deliveryTime: "30 min - 45 min",
    },
    {
      id: "2",
      name: "Pizza de Queijo Deliciosa",
      imageUrl: "/foods/6.jpeg",
      deliveryFee: "R$ 3,00 de entrega",
      rating: 4.5,
      reviews: 35,
      category: "Jean",
      deliveryTime: "25 min - 35 min",
    },
    {
      id: "3",
      name: "Espetos de Legumes",
      imageUrl: "/foods/8.jpeg",
      deliveryFee: "R$ 4,00 de entrega",
      rating: 4.8,
      reviews: 57,
      category: "Chaqueta",
      deliveryTime: "15 min - 25 min",
    },
    {
      id: "4",
      name: "Pizza de Pepperoni",
      imageUrl: "/foods/7.jpeg",
      deliveryFee: "R$ 1,00 de entrega",
      rating: 4.7,
      reviews: 136,
      category: "Cahqueta",
      deliveryTime: "50 min - 55 min",
    },
    {
      id: "5",
      name: "Chef’s Burger Deluxe",
      imageUrl: "/foods/2.jpeg",
      deliveryFee: "Entrega grátis",
      rating: 4.5,
      reviews: 121,
      category: "Jean",
      deliveryTime: "35 min - 45 min",
    },
    {
      id: "6",
      name: "Arroz Natural de Legumes",
      imageUrl: "/foods/9.jpeg",
      deliveryFee: "R$ 5,00 de entrega",
      rating: 5,
      reviews: 20,
      category: "Jean",
      deliveryTime: "30 min - 55 min",
    },
  ];

  return (
    <div>
      <div className={Styles.header}>
        <h2>Pedidos populares</h2>
        <div>
          <p>Hoje</p>
        </div>
      </div>
      <div className="flex gap-6 justify-between flex-wrap">
        {foods.map((food, index) => (
          <FoodItem key={index} {...food} />
        ))}
      </div>
    </div>
  );
}
