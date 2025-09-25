import Link from "next/link";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <h1>Header</h1>
    </>
  );
};

export default Header;
