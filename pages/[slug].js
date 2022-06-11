import SanityBlockContent from "@sanity/block-content-to-react";
import Image from "next/image";
import sanityconfig from "../sanityconfig";
import Head from "next/head";

export default function CurrentBlog({ data }) {
  const serializers = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  return (
    <>
      <Head>
        <title>The Car Heart | Blog Post</title>
      </Head>
      <div className="parentBlog">
        {data && (
          <div className="singleBlog">
            <h1>{data.title}</h1>

            <Image
              className="image"
              src={data.postImage}
              width={700}
              height={400}
              alt="Blog Image"
            />
            <div className="sub">
              <span className="author">{`By: ${data.postAuthor}`}</span>
            </div>
            <SanityBlockContent serializers={serializers} blocks={data.body} />
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await sanityconfig.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const data = await sanityconfig.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
        title,
        "postImage" : mainImage.asset->url, 
        slug, 
        body, 
        _id, 
        "postAuthor": author->name,
        _updatedAt
      }
  `,
    { slug }
  );
  return {
    props: {
      data,
    },
  };
}
