import { useState, useEffect } from "react";

import useScrollPosition from "@react-hook/window-scroll";
import { DonutCursorProvider, DonutConsumer } from "react-donut-cursor";
import { AnimatePresence } from "framer-motion";

import Layout from "../src/components/Layout";
import Header from "../src/components/Header";
import About from "../src/components/About";
import CircleText from "../src/components/CircleText";
import Modal from "../src/components/Modal";
import Loader from "../src/components/Loader";

import useWindowSize from "../src/hooks/useWindowsSize";
import styles from "../styles/Home.module.css";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

import { data } from "../src/data";
import CursorPortal from "../src/components/CursorPortal";

export default function Home() {
  const { width, height } = useWindowSize();

  const scrollY = useScrollPosition();

  const [light, setLight] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loader, setLoader] = useState(true);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  useEffect(() => {
    if (scrollY >= 1200) {
      setLight(true);
    } else {
      setLight(false);
    }
  }, [scrollY]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);

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
    <AnimatePresence exitBeforeEnter>
      {loader ? (
        <Loader />
      ) : (
        <Layout nav={true} key={"layout"} light={light} data={data}>
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
                itsIndex={false}
              />
              <Projects onOpen={handleOpenModal} />
              <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
                data={modalData}
              />
              <Contact />
            </div>
          </div>
        </Layout>
      )}
    </AnimatePresence>
  );
}
