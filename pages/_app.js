import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
//import { DonutCursorProvider, DonutConsumer } from "react-donut-cursor";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimateSharedLayout type="crossfade">
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
