import { useState } from "react";
export default function Login() {
  const [log, setLog] = useState(false);
  if (log == false) {
    return (
      <div className="login">
        <h1>Sign Up</h1>

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter Name" />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Set Password"
          />

          <button type="submit">Submit</button>
        </form>

        <p>I have an account</p>
        <span
          onClick={() => {
            setLog(!log);
          }}
        >
          Login In
        </span>
      </div>
    );
  } else {
    return (
      <div className="login">
        <form>
          <h1>Sign In</h1>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter Email" />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <button type="submit">Log In</button>
        </form>
        <p>Haven&apos;t Made An Account?</p>
        <span
          onClick={() => {
            setLog(!log);
          }}
        >
          Make one
        </span>
      </div>
    );
  }
}
