import Head from "next/head";

import NavBar from "./NavBar";

import styles from "../../styles/Home.module.css";

export default function Layout({
  title,
  keywords,
  description,
  light,
  children,
  nav = false,
  modalOpen,
}) {
  return (
    <div id={"home"}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {nav && <NavBar light={light} />}
      <main>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Nicolás Portfolio",
  description: "Welcome to my portfolio",
  keywords: "Potfolio, metrics, web, dev",
};
