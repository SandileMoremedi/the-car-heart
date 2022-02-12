export default function Blog() {
  return (
    <div className="blog-page">
      <h1>hello</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:8800/?blogList=${blog}`);
  const blogs = await res.json();

  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          blogList: blog,
        },
      };
    }),
  };
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8800/blogs?}`);
  const blogs = await res.json();

  console.log(blogs.id);
  return {
    props: {
      blogs,
    },
  };
}
