import { Chatslights, PageTemplate } from "@/components";
import type { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <PageTemplate
      title="Contactar Marcas"
      description="Ver las mejores marcas en Marketplace B2B!"
    >
      <Chatslights title="Contactar Marcas" />
    </PageTemplate>
  );
};

export default Chats;
