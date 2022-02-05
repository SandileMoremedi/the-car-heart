import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="nav">
      <h1>TCH</h1>
      <div
        className={navbar ? "navbar open" : "navbar"}
        onClick={() => setNavbar(!navbar)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul onClick={() => setNavbar(!navbar)} className={navbar ? "open" : ""}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/contact">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
