import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <h1>The Car Heart</h1>
      <div className="items">
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/">Login</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="logo">
          <Image src="/logo.png" width={200} height={200} alt="Logo" />
        </div>
        <div className="privacy-policy">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
