import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Navbar />
        <Component {...pageProps} />;
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
