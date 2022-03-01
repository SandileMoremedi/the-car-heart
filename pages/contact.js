import Head from "next/head";
import { useEffect, useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);
  useEffect(() => {
    setSent(false);
  }, []);
  return (
    <div className="contact">
      <Head>
        <title>The Car Heart | Contact</title>
      </Head>
      <h1>Contact Us</h1>
      <h3>The Comment Was Sent. Thank You!</h3>
      <form
        method="POST"
        action="https://formsubmit.co/sandilemoremedi070501@gmail.com"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          required
        />

        <label htmlFor="comment">Comment</label>
        <textarea
          name="comment"
          id="comment"
          cols="20"
          rows="5"
          placeholder="Enter Your Comment"
          required
        ></textarea>

        <button
          type="submit"
          onClick={(e) => {
            // e.preventDefault();
            setSent(true);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
