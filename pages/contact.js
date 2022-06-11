import Head from "next/head";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

export default function Contact() {
  const [sent, setSent] = useState(true);

  async function closeModal() {
    setTimeout(() => {
      setSent(false);
    }, 2000);
  }

  return (
    <div className="contact">
      <Head>
        <title>The Car Heart | Contact</title>
      </Head>
      <h1>Contact Us</h1>
      {sent && <Modal>Comment Was Sent. Thank You!</Modal>}
      <form
        method="POST"
        action="https://formsubmit.co/sandilemoremedi070501@gmail.com"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="Name"
          id="name"
          placeholder="Enter Name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="Email"
          id="email"
          placeholder="Enter Email"
          required
        />

        <label htmlFor="comment">Comment</label>
        <textarea
          name="Comment"
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
            closeModal();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
