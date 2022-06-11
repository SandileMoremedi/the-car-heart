import Image from "next/image";
import Link from "next/link";
const BlogLayout = ({ blog }) => {
  return (
    <div className="blogs">
      <div className="image">
        <Image width={700} height={400} alt="Blog Image" src={blog.postImage} />
      </div>

      <div className="content">
        <Link href={blog.slug.current} passHref>
          <h3>{blog.title}</h3>
        </Link>

        <div className="top-content">
          <span className="author">Author: {blog.postAuthor}</span>
          {/* <span className="category">Category: {blog.category}</span> */}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
