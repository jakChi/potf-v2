import Link from "next/link";
import { FloatingNavbar } from "./ui/floating-navbar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
];

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-center">
        {navItems.map((navItem: any, idx: number) => (
          <Link href={navItem.link} key={idx} className="m-5 text-lg font-mono">
            <span className="">{navItem.icon}</span>
            <span className="">{navItem.name}</span>
          </Link>
        ))}
      </nav>
      <FloatingNavbar navItems={navItems} />
    </>
  );
}
