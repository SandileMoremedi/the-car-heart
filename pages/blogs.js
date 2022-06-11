// import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import BlogLayout from "../components/blogslayout";
import sanityClient from "../sanityconfig";

export default function Blogs({ data }) {
  // const { user, loading, error } = useAuth();
  console.log(data);

  return (
    <div className="blogs">
      <Head>
        <title>The Car Heart | Blogs List</title>
      </Head>
      <h1>Blogs</h1>
      {data ? (
        <div className="main-blogs">
          {data.map((blog, index) => (
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

export const getServerSideProps = async (context) => {
  const data = await sanityClient.fetch(
    `
      *[_type == "post"]{
        title,
        "postImage" : mainImage.asset->url, 
        slug, 
        body, 
        _id, 
        "postAuthor": author->name,
        _updatedAt
      }
      `
  );
  return {
    props: { data },
  };
};
