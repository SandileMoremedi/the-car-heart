import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="nav">
      <Link href="/">
        <h1>TCH</h1>
      </Link>
      <div
        className={navbar ? "navbar" : "navbar open"}
        onClick={() => setNavbar(!navbar)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul onClick={() => setNavbar(!navbar)} className={navbar ? "" : "open"}>
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
        <li>
          <Link href="/login">Sign Up/In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
