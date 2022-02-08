export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <input type="text" name="name" id="name" placeholder="Enter Name" />
        <input type="text" name="email" id="email" placeholder="Enter Email" />

        <textarea
          name="comment"
          id="comment"
          cols="20"
          rows="10"
          placeholder="Enter Your Comment"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
