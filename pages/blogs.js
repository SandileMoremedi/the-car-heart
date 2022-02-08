import { motion } from "framer-motion";
import Image from "next/image";

export default function Blogs({ data }) {
  return (
    <div className="blogs">
      <h1>Blogs</h1>

      <div className="blog-main">
        {data &&
          data.map((info, index) => (
            <motion.div className="blog-block" key={index}>
              <Image
                width={400}
                height={400}
                src={info.image}
                alt="Blog Main Image"
              />
              <h2>{info.title}</h2>
              <p>{info.body}</p>
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
