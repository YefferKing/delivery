import { Categories, Highlights, Foods, PageTemplate } from "@/components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PageTemplate
      title="Home"
      description="Marketplace B2B"
    >
      <Categories />
      <Highlights />
      <Foods />
    </PageTemplate>
  );
};

export default Home;
