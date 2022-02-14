import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { collection, getFirestore } from "firebase/firestore";
import { app } from "../Firebase/config";
import useBeginner from "../Firebase/useFirestore";
const collect = getFirestore(app);
const colRef = collection(collect, "beginner");

export default function Blogs() {
  var { data } = useBeginner(colRef);
  console.log(data);
  return (
    <>
      <h1>Blogs</h1>
    </>
    // <>
    //   <div className="blogs">
    //     <h1>Blogs</h1>
    //     <div className="search-bar-container">
    //       <input type="search" id="" />
    //     </div>
    //     <div className="main-blogs">{console.log(blogContent )}</div>
    //   </div>
    // </>
  );
}
{
  /* <div className="blogs">
  
  
  
    {blogs.map((blog, index) => (
      <>
        <h3 key={index}> {blog}</h3>
        <motion.div className="blog" key={index}>
          <Image
            width={400}
            height={400}
            src={blog.image}
            alt="Blog Main Image"
          />
          <div className="content">
            <Link href={`/beginner/${blog.id}`}>
              <a>
                <h3 className="blog-link">{blog.title}</h3>
              </a>
            </Link>
            <p>{blog.body}</p>
          </div>
        </motion.div>
      </>
    ))}
  </div>
</div>; */
}
