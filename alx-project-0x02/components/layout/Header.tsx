import Link from "next/link";
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <nav>
        <ul className="flex gap-4 p-4 bg-gray-700 justify-end">
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
    </>
  );
};

export default Header;
