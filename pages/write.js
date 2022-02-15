import Head from "next/head";
import Image from "next/image";
export default function Write() {
  return (
    <div className="blog-write">
      <Head>
        <title>Write Your Blog</title>
      </Head>
      <div className="write">
        <form>
          <div className="top">
            <div className="write-image">
              <Image src="/man-walking.jpg" alt="" width={300} height={200} />
            </div>
            <div className="image-text">
              <label htmlFor="image" className="file-label">
                +
              </label>
              <input type="file" id="image" className="file-input" />

              <input
                type="text"
                placeholder="Title"
                className="top-input"
                autoFocus={true}
              />
            </div>
            <textarea
              name=""
              id="blog-content"
              placeholder="Tell us about it"
              cols="30"
              rows="10"
              className="blog-textarea"
            ></textarea>
          </div>

          <aside className="illustration">
            <h3>Illustration</h3>
            <label htmlFor="illustration-image">Add Image</label>
            <input
              type="file"
              id="illustration-image"
              style={{ display: "none" }}
            />

            <input
              type="text"
              placeholder="What is this?"
              className="input-side"
            />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </aside>
        </form>
      </div>
    </div>
  );
}
