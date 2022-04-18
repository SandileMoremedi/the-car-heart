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

export default function Blogs({ loggedIn, data }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setBlogs(JSON.parse(data));
  }, [data]);
  console.log(blogs);

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

export async function getServerSideProps() {
  const colRef = collection(getFirestore(app), "blogs");
  var dataBeforeJSON = [];
  const blogDocs = await getDocs(colRef);
  const blogPromise = blogDocs.docs;
  blogPromise.map((blog) => {
    dataBeforeJSON.push({
      ...blog.data(),
      id: blog.id,
    });
  });
  const data = JSON.stringify(dataBeforeJSON);

  return {
    props: {
      data,
    },
  };
}
