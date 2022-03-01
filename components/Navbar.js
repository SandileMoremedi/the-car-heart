import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { app } from "../firebase/config";
import { getAuth, signOut } from "firebase/auth";
const Navbar = ({ loggedIn, setLoggedIn }) => {
  const auth = getAuth(app);
  const [navbar, setNavbar] = useState(false);
  const [topSettings, setTopSettings] = useState(false);
  return (
    <nav className="nav">
      <div className="left-items">
        <div
          className={navbar ? "navbar open" : "navbar"}
          onClick={() => setNavbar(!navbar)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <Link href="/" passHref>
          <h1>TCH</h1>
        </Link>
      </div>

      <ul
        onClick={() => setNavbar(!navbar)}
        className={navbar ? "ul open" : "ul"}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/write">Write</Link>
        </li>
      </ul>

      <div className="profile-settings">
        <i
          className="fa-solid fa-toolbox"
          onClick={() => setTopSettings(!topSettings)}
        ></i>
        <div className={topSettings ? "options open" : "options"}>
          <ul className="top-settings">
            <li>
              <i className="fa-solid fa-wrench"></i>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <i className="fa-solid fa-receipt"></i>
              {loggedIn == true ? (
                <button
                  onClick={() => {
                    setLoggedIn(false);
                    signOut(auth);
                    console.log(loggedIn);
                    localStorage.setItem("logged", "false");
                  }}
                >
                  Sign Out
                </button>
              ) : (
                <Link href="/login">Sign In/Up</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
