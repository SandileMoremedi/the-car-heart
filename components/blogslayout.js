import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
const BlogLayout = ({ blog }) => {
  return (
    <div className="blogs">
      <div className="image">
        <Image width={700} height={400} alt="Blog Image" src={blog.image} />
      </div>

      <div className="content">
        <Link href={blog.id} passHref>
          <h3>{blog.title}</h3>
        </Link>
        <p>{blog.body}</p>

        <div className="top-content">
          <span className="author">Author: {blog.author}</span>
          <span className="category">Category: {blog.category}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
