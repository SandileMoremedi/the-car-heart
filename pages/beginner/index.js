import Image from "next/image";
import { motion } from "framer-motion";
import { app } from "../../Firebase/config";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  query,
  onSnapshot,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import PopLogo from "../../components/Home/PopLogo";
import Head from "next/head";

export default function Beginner({ blogs }) {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "beginner")
  );
  console.log(value !== true);
  return (
    <>
      <Head>
        <title>The Car Heart | Home</title>
      </Head>
      <PopLogo />
      <motion.div className="beginner">
        <h1>Beginner Blogs</h1>
        <main className="main-blogs">
          {value !== true && (
            <>
              {value.forEach((blog) => (
                <div className="blog">
                  <div className="image">
                    <Image
                      src={blog.data().image}
                      width={350}
                      height={300}
                      alt="Blog Image"
                    />
                  </div>
                  <div className="content">
                    <Link href={`/beginner/${blog.data().id}`}>
                      <a>
                        <h3 className="blog-link">{blog.title}</h3>
                      </a>
                    </Link>
                    <p>{blog.data().body}</p>
                  </div>
                </div>
              ))}
            </>
          )}
        </main>
      </motion.div>
    </>
  );
}
