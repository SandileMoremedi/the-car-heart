import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../firebase/config";
import BlogLayout from "../../components/blogslayout";
const Beginner = () => {
  const [blogs, setBlogs] = useState([]);
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

  return (
    <div className="blog-parent">
      <h1>Beginner Blogs</h1>
      <div className="blogs">
        <div className="main-blogs">
          {blogs &&
            blogs.map(
              (blog, index) =>
                blog.category == "beginner" && (
                  <BlogLayout blog={blog} key={index} />
                )
            )}
        </div>
      </div>
    </div>
  );
};
export default Beginner;
