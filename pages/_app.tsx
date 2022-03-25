import "../styles/globals.css";
import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { configuration } from "../util/configuration";
export default function MyApp({
  Component,
  pageProps,
}: {
  Component: NextPage;
  pageProps: any;
}) {
  return (
    <>
      <NextSeo
        title={configuration.title}
        description={configuration.description}
      />
      <Component {...pageProps} />
    </>
  );
}
