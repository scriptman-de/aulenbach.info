import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-blue-100">
      <ul className="flex flex-row place-content-evenly">
        <li>
          <Link href="/">
            <a>&Uuml;ber mich</a>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <a>Lebenslauf</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
