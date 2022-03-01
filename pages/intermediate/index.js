import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase/config";
import BlogLayout from "../../components/blogslayout";
const Intermediate = () => {
  useEffect(() => {
    const getData = async () => {
      const firestore = getFirestore(app);
      const colRef = collection(firestore, "blogs");

      const blogData = await getDocs(colRef);
      setBlogs(
        blogData.docs.map((blog) => ({
          ...blog.data(),
          id: blog.id,
        }))
      );
    };

    getData();
  }, []);
  const [blogs, setBlogs] = useState([]);
  return (
    <div className="blog-parent">
      <h1>Intermediate Blogs</h1>
      <div className="blogs">
        <div className="main-blogs">
          {blogs &&
            blogs.map((blog, index) => {
              blog.category == "intermediate" && (
                <BlogLayout blog={blog} key={index} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Intermediate;
