import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="initial"
          exit="exit"
          animate="animate"
          variants={{
            exit: {
              opacity: 0,
            },
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <Navbar />
          <Component {...pageProps} />;
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
