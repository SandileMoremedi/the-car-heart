import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "../styles/globals.scss";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { app } from "../firebase/config";

// TODO: Make the user authentication easy for every time a user is logged in.

function MyApp({ Component, pageProps, router }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (cred) => {
      if (cred) {
        setUserDetails(cred);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, [userDetails]);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Component
        {...pageProps}
        setLoggedIn={setLoggedIn}
        loggedIn={loggedIn}
        userDetails={userDetails}
      />
      <Footer />
    </>
  );
}

export default MyApp;
