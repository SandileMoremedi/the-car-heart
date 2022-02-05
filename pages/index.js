import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <meta
          name="description"
          content="This website is for people with interests in cars, how they work, how they are made, etc. Come explore the world of cars."
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
        <section>
          <h2>Welcome</h2>
        </section>
      </main>
    </div>
  );
}
