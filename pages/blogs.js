import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Blogs({ data }) {
  return (
    <div className="blogs">
      <h1>Blogs</h1>

      <div className="main-blogs">
        {data &&
          data.map((blog, index) => (
            <motion.div className="blog" key={index}>
              <Image
                width={400}
                height={400}
                src={blog.image}
                alt="Blog Main Image"
              />
              <div className="content">
                <Link href={`/beginner/${blog.id}`}>
                  <h3 className="blog-link">{blog.title}</h3>
                </Link>
                <p>{blog.body}</p>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const d = await fetch("http://localhost:8800/blogs");
  const data = await d.json();

  return {
    props: { data },
  };
}
