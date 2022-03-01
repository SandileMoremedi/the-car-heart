import Image from "next/image";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { app } from "../firebase/config";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import BlogLayout from "../components/blogslayout";

export default function Profile({ loggedIn, userDetails }) {
  const [users, setUsers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getDataBlogs = async () => {
      const firebase = getFirestore(app);
      const colRefBlogs = collection(firebase, "blogs");

      const dataBlogs = await getDocs(colRefBlogs);
      setBlogs(
        dataBlogs.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getDataBlogs();
    setUsersArray(
      users.map((user) => ({
        ...user,
      }))
    );
  }, []);
  const [usersArray, setUsersArray] = useState([]);

  console.log(usersArray);
  const [name, setName] = useState("");
  return (
    <div className="profile">
      <Head>
        <title>The Car Heart | Profile</title>
      </Head>
      {loggedIn == true ? (
        <div className="wrapper">
          <h1>User Blog List</h1>
          <div className="blogs">
            <div className="main-blogs">
              {console.log(blogs)}
              {blogs &&
                blogs.map(
                  (blog, index) =>
                    blog.blogId == userDetails.uid && (
                      <BlogLayout blog={blog} key={index} />
                    )
                )}
            </div>
          </div>
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
