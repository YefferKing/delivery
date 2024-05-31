import { GetServerSideProps } from "next";
import { Foods, PageTemplate, ItemDetails } from "@/components";
import Styles from "./restaurant.module.css";
import { RestaurantProps } from "./types";

export default function Restaurant({ id }: RestaurantProps) {
  return (
    <PageTemplate
      title="Restaurante"
      description="Página de restaurante do Nibble Restaurantes"
    >
      <img src="../brands/stopp.svg" alt="Stop Jeans" width="20%" />
      <div className={Styles.header}>
        <div className={Styles.details}>
          <h1>Stop Jeans</h1>
          <p>
          Es una de las marcas rápidas más emblemáticas y reconocibles.
          </p>
        </div>
        <div className={Styles.tags}>
          <span>Entrega grátis</span>
          <span>Compre 1 lleve 2</span>
          <span>Abre a las 8h</span>
        </div>
      </div>
      <div className="mb-12">
        <ItemDetails
          rating={4.7}
          reviews={202}
          category={"Jeans"}
          price={1}
          distance={"4,3 km (Irving St, San Francisco, California)"}
        />
      </div>
      <Foods />
    </PageTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params?.id,
    },
  };
};
