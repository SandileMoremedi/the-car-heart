import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

// TODO: Make the user authentication easy for every time a user is logged in.

function MyApp({ Component, pageProps, router }) {
  return (
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
  );
}

export default MyApp;
