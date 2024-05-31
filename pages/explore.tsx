import { Highlights, Foods, PageTemplate } from "@/components";
import type { NextPage } from "next";

const Explore: NextPage = () => {
  return (
    <PageTemplate
      title="Explorar Marcar"
      description="Ver las mejores marcas en Marketplace B2B!"
    >
      <Highlights title="Marcas Destacadas" />
      <Foods />
    </PageTemplate>
  );
};

export default Explore;
