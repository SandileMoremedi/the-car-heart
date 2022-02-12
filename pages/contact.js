import Head from "next/head";

export default function Contact() {
  return (
    <div className="contact">
      <Head>
        <title>The Car Heart | Contact</title>
      </Head>
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Enter Name" />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder="Enter Email" />

        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          cols="20"
          rows="5"
          placeholder="Enter Your Comment"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
