import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
//import { DonutCursorProvider, DonutConsumer } from "react-donut-cursor";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence exitBeforeEnter>
        <motion.div layout key={router.route}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;
