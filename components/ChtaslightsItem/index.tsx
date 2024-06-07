import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconBase } from "..";
import Styles from "./styles.module.css";

type ChtaslightsItemProps = {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  brandUrl: string;
};

export const ChatslightsItem = ({ ...props }: ChtaslightsItemProps) => {
  return (
    <div className={Styles.restaurant}>
      <div className={Styles.brand}>
        <Link href={`marcas/${props.id}`}>
          <a>
            <Image
              src={props.brandUrl}
              width="64px"
              height="64px"
              alt={props.name}
            />
          </a>
        </Link>
      </div>
      <div className={Styles.info}>
        <Link href={`restaurants/${props.id}`}>
          <a>
            <h3>{props.name}</h3>
          </a>
        </Link>
        <div className="my-3">
          <div>
            <IconBase iconName="star" size={16} color="#facd5d" />
            <span>{props.rating}</span> ({props.reviews})
          </div>
        </div>
      </div>
    </div>
  );
};
