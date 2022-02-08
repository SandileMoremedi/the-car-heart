import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import PopLogo from "../components/Home/PopLogo";
import Welcome from "../components/Home/Welcome";

export default function Home() {
  return (
    <>
      <PopLogo />
      <div className="home">
        <Head>
          <meta
            name="description"
            content="This website is for people with interests in cars, how they work, how they are made, etc. Come explore the world of cars."
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <title>The Car Heart | Home</title>
        </Head>

        <header>
          <section>
            <h1>The Car Heart</h1>
            <p>
              <q>
                I am emotional about engines, if you hurt my car, you heart my
                heart
              </q>
            </p>
            <span>
              <i>-Amit Kalantri</i>
            </span>
          </section>
        </header>
        <main>
          <section className="welcome">
            <Welcome />
          </section>
        </main>
      </div>
    </>
  );
}
