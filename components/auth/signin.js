import { app } from "../../firebase/config";
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// This was for the sign up,
// I needed to store the state of whether someone is logged in somewhere.
// So I used LocalStorage to store the variable and the name of the user.
export default function Signup() {
  const auth = getAuth(app);
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [name, setName] = useState("");
  const firestore = getFirestore(app);
  const createUser = (logEmail, logPassword, name) => {
    createUserWithEmailAndPassword(auth, logEmail, logPassword).then((cred) => {
      // This is where we add new users by using addDoc()
      addDoc(collection(firestore, "users"), {
        id: cred.user.uid,
        name: name,
        bio: "I am passionate user of this blog site and I am willing to share my information with the world.",
      });
    });
  };
  return (
    <>
      <h1>Sign Up</h1>

      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          // This is for adding the email, name and password. By putting it in a state it's much easier

          onChange={(e) => {
            setSignInEmail(e.target.value);
          }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Set Password"
          onChange={(e) => {
            setSignInPassword(e.target.value);
          }}
        />

        <button
          type="submit"
          onClick={(e) => {
            // At the top I make a function I can use to sign in users, the parameters are the 3 needed values.
            createUser(signInEmail, signInPassword, name);
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
