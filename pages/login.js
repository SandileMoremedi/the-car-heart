import { useState, useEffect } from "react";
import Head from "next/head";
import SignIn from "../components/auth/signin";
import LoginP from "../components/auth/login";
import { getFirestore, doc } from "firebase/firestore";
export default function Login({ setLoggedIn, userCredentials }) {
  const [log, setLog] = useState(null);

  if (log == false) {
    return (
      <>
        <div className="login">
          <SignIn setLoggedIn={setLoggedIn} />
          <p>I have an account</p>
          <span
            onClick={() => {
              setLog(!log);
            }}
          >
            Login In
          </span>
        </div>
      </>
    );
  } else {
    return (
      <div className="login">
        <LoginP setLoggedIn={setLoggedIn} />
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
