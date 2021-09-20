import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import Router from "next/router";

import useScrollPosition from "@react-hook/window-scroll";
import { DonutCursorProvider, DonutConsumer } from "react-donut-cursor";

import Layout from "../src/components/Layout";
import Header from "../src/components/Header";
import About from "../src/components/About";
import CircleText from "../src/components/CircleText";
import NewCircleText from "../src/components/NewCircleText";
import Modal from "../src/components/Modal";

import useWindowSize from "../src/hooks/useWindowsSize";
import styles from "../styles/Home.module.css";
import TextMoving from "../src/components/TextMoving";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

import { data } from "../src/data";

export default function Home() {
  const { width, height } = useWindowSize();

  const scrollY = useScrollPosition();

  const [light, setLight] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (scrollY >= 1200) {
      setLight(true);
    } else {
      setLight(false);
    }
  }, [scrollY]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "12px";
    } else {
      document.body.style.overflowY = "visible";
      document.body.style.paddingRight = "0px";
    }
  }, [showModal]);

  return (
    <Layout nav={true} key={"index"} light={light} data={data}>
      <DonutCursorProvider>
        <div
          className={`${styles.fatherContainerBackground} ${
            light && styles.fatherContainerBackgroundDark
          } `}
        >
          <div className={styles.container}>
            <Header />

            {width >= 950 && <CircleText />}

            <About
              light={light}
              data={data}
              titleOne={
                "SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS -"
              }
              animate={true}
            />
            <Projects onOpen={() => setShowModal(true)} />
            <Modal onClose={() => setShowModal(false)} show={showModal} />
            <Contact />
          </div>
        </div>
      </DonutCursorProvider>
    </Layout>
  );
}
