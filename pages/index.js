import { useState, useEffect } from "react";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { AnimatePresence } from "framer-motion";

import Layout from "../src/components/Layout";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Modal from "../src/components/Modal";
import Loader from "../src/components/Loader";

import styles from "../styles/Home.module.css";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";

import AboutMe from "../src/components/AboutMe";
import { data } from "../src/data";

export default function Home() {
  const [light, setLight] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [loader, setLoader] = useState(true);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y <= -1200) {
        setLight(true);
      } else {
        setLight(false);
      }
    },
    [],
    null,
    false,
    500
  );

  /**
 *   
  const scrollY = useScrollPosition(60);

  const { width } = useWindowSize();

  {width >= 950 && <CircleText />}

  useEffect(() => {
    if (scrollY >= 1200) {
      setLight(true);
    } else {
      setLight(false);
    }
  }, [scrollY]);
 */

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoader(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
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

              <About
                light={light}
                data={data}
                titleOne={
                  "SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS - SKILLS -"
                }
                animate={true}
                itsIndex={false}
                component={<AboutMe />}
              />
              <Projects onOpen={handleOpenModal} light={light} />
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
