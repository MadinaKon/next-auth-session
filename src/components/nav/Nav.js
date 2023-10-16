import Link from "next/link";
import { nav } from "./Nav.module.css";
import { useSession } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();

  return (
    <nav className={nav}>
      <Link href="/">Home</Link>
      {session && (
        <>
          <Link href="/user/posts">Your Posts</Link>
          <Link href="/user/edit">Edit Profile</Link>
          <Link href="/user/add-post">New Post</Link>
        </>
      )}
    </nav>
  );
}
