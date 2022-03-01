import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { app } from "../firebase/config";
import {
  getDocs,
  collection,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import BlogLayout from "../components/blogslayout";

export default function Blogs({ loggedIn }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const firestore = getFirestore(app);
      const colRef = collection(firestore, "blogs");
      const blogsPromise = await getDocs(colRef);
      setBlogs(
        blogsPromise.docs.map((blog) => ({
          ...blog.data(),
          id: blog.id,
        }))
      );
    };
    getData();
  }, []);
  return (
    <div className="blogs">
      <Head>
        <title>The Car Heart | Blogs List</title>
      </Head>
      <h1>Blogs</h1>
      {loggedIn ? (
        <div className="main-blogs">
          {blogs.map((blog, index) => (
            <BlogLayout blog={blog} key={index} />
          ))}
        </div>
      ) : (
        <div className="notLoggedIn">
          <h2>You are not logged in.</h2>
          <Link href="/login">Sign In / Up</Link>
        </div>
      )}
    </div>
  );
}
