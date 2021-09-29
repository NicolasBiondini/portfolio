import Head from "next/head";

import { motion } from "framer-motion";

import style from "../../styles/Loader.module.css";

export default function Loader() {
  return (
    <motion.div
      exit={{ y: -1000, transition: { duration: 0.6, delay: 0 } }}
      key="loader"
      className={style.container}
    >
      <Head>
        <title>Nicolás Portfolio</title>
        <meta name="description" content={"Welcome to my portfolio"} />
        <meta name="keywords" content={"Potfolio, metrics, web, dev"} />
      </Head>
      <div className={style.textWrapper}>
        <div className={`${style.text1} ${style.text}`}>keep it simple</div>
        <div className={`${style.text2} ${style.text}`}>keep it simple</div>
        <div className={`${style.text3} ${style.text}`}>keep it simple</div>
        <div className={`${style.text4} ${style.text}`}>keep it simple</div>
        <div className={`${style.text5} ${style.text}`}>keep it simple</div>
        <div className={`${style.text6} ${style.text}`}>keep it simple</div>
        <div className={`${style.text7} ${style.text}`}>keep it simple</div>
        <div className={`${style.text8} ${style.text}`}>keep it simple</div>
        <div className={`${style.text9} ${style.text}`}>keep it simple</div>
        <div className={`${style.text10} ${style.text}`}>keep it simple</div>
        <div className={`${style.text11} ${style.text}`}>keep it simple</div>
      </div>
    </motion.div>
  );
}
