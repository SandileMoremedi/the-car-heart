import Link from "next/link";

export default function Dialogue({ loggedIn }) {
  {
    loggedIn == false && (
      <div className="dialogue">
        <h2>You are not logged in.</h2>
        <Link href="/login">Login</Link>
      </div>
    );
  }
}
