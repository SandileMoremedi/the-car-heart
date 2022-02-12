import Head from "next/head";
export default function Write() {
  return (
    <div className="blog-write">
      <Head>
        <title>Write Your Blog</title>
      </Head>
      <div className="write">
        <div className="top-section">
          <div className="write-image">
            <img
              src="/man-walking.jpg"
              alt="Blog-image"
              className="write-blog-image"
            />
          </div>
          <div className="write-image-block">
            <label htmlFor="blog-image" className="blog-image-input">
              +
            </label>
            <input type="file" id="blog-image" style={{ display: "none" }} />
            <input type="text" autoFocus={true} placeholder="Enter The Title" />
          </div>
        </div>
        <div className="bottom-section">
          <textarea
            placeholder="Tell Us About It"
            typeof="text"
            id=""
            cols="30"
            rows="10"
            className="textarea"
          ></textarea>
        </div>
      </div>
      <aside className="illustrationImages">
        <h3>Blog Image Illustration</h3>
        <form>
          <label htmlFor="image" className="blog-image__aside">
            Add Your Image
          </label>
          <input type="file" id="image" style={{ display: "none" }} />
          <input type="text" placeholder="What is this?" />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </aside>
    </div>
  );
}
