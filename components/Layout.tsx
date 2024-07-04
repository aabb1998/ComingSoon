import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title} | Alihsan Foundation USA</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Alihsan Foundation USA" />
      <meta property="og:title" content={`${title} | Alihsan Foundation USA`} />
      <meta property="og:description" content="Alihsan Foundation USA" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
