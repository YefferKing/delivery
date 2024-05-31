import Head from "next/head";
import React from "react";

type PageHeadProps = {
  title: string;
  description?: string;
  keywords?: string;
};

export function PageHead({ ...props }: PageHeadProps) {
  return (
    <Head>
      <title>{props.title} -  Marketplace B2B</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <link rel="shortcut icon" href="/B2B.ico" type="image/x-icon" />
    </Head>
  );
}
