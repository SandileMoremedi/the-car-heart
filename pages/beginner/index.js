import PopLogo from "../../components/Home/PopLogo";
import Head from "next/head";

export default function Beginner() {
  return (
    <>
      <Head>
        <title>The Car Heart | Home</title>
      </Head>
      <PopLogo />
      <div className="beginner">
        <h1>Beginner Blogs</h1>
        <main className="main-blogs"></main>
      </div>
    </>
  );
}
