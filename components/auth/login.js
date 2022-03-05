import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import { app } from "../../firebase/config";
export default function LoginP({ setLoggedIn }) {
  const auth = getAuth(app);
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  function logIn(Email, Password) {
    signInWithEmailAndPassword(auth, Email, Password)
      .then((cred) => {
        setLoggedIn(true);
        setSuccess(true);
      })
      .catch((err) => setError(true));
  }
  return (
    <>
      {error && (
        <div className="container">
          <div className="error">
            <h2>Error:</h2>
            <h3>Password/Email is incorrect!</h3>
            <button
              onClick={() => {
                setError(false);
              }}
            >
              Okay
            </button>
          </div>
        </div>
      )}
      {success && (
        <div className="container">
          <div className="success">
            <h2>Logged In</h2>
            <h3>Welcome Home!</h3>
            <Link href="/">Thanks</Link>
          </div>
        </div>
      )}
      <form>
        <h1>Sign In</h1>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Enter Email"
          onChange={(e) => {
            setSignInEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setSignInPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            logIn(signInEmail, signInPassword);
            e.preventDefault();
          }}
        >
          Log In
        </button>
      </form>
      <p>Haven&apos;t Made An Account?</p>
    </>
  );
}
