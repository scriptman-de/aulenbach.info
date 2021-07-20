import ActiveLink from './ActiveLink';

function NavItem({
  href,
  text,
  color,
}: {
  href: string;
  text: string;
  color: string;
}) {
  return (
    <ActiveLink href={href} activeClassName={color}>
      <a
        className={`block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:${color}`}
      >
        <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
          {text}
        </span>
      </a>
    </ActiveLink>
  );
}

export default NavItem;
