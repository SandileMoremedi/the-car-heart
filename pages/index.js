import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PopLogo from "../components/Home/PopLogo";
import Welcome from "../components/Home/Welcome";

export default function Home() {
  return (
    <>
      <PopLogo />
      <motion.div className="home">
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
            <h2>Welcome</h2>

            <p>
              I see you have found home, where every car geek lives. This
              website was made for you and what you are most interested in,
              cars.
            </p>
            <p>
              We teach and learn all about cars, from the most simple things
              such as a steering wheel&apos;s main function to the most complex
              components of a car.
            </p>
            <p>
              So get comfortable for all the blogs, the videos and all the
              contents in this website. This is your new home now. Welcome Home.
            </p>

            <p>There are 3 levels of information.</p>
            <div className="welcome-grid-items">
              <Link href="/beginner/">
                <motion.a
                  className="welcome-item"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <h3>Beginner</h3>
                  <div className="welcome-content">
                    <p>
                      This is the content for all for the people who want to
                      learn about a car body and its basic outer parts.
                    </p>
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </motion.a>
              </Link>
              <Link href="/intermediate/">
                <motion.a
                  className="welcome-item"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <h3>Intermediate</h3>
                  <div className="welcome-content">
                    <p>
                      This is the content for all for the people who want to
                      learn about a car body and its basic outer parts.
                    </p>
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </motion.a>
              </Link>
              <Link href="/expert/">
                <motion.a
                  className="welcome-item"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <h3>Expert</h3>
                  <div className="welcome-content">
                    <p>
                      This is the content for all for the people who want to
                      learn about a car body and its basic outer parts.
                    </p>
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </motion.a>
              </Link>
            </div>
          </section>
        </main>
      </motion.div>
    </>
  );
}
