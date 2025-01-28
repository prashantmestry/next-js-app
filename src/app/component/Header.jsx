import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;
