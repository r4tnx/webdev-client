"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/labs", id: "wd-home-link", label: "Home", match: (p: string) => p === "/labs" },
  { href: "/labs/lab1", id: "wd-lab1-link", label: "Lab 1", match: (p: string) => p.endsWith("/lab1") || p.includes("/lab1/") },
  { href: "/labs/lab2", id: "wd-lab2-link", label: "Lab 2", match: (p: string) => p.includes("/lab2") },
  { href: "/labs/lab3", id: "wd-lab3-link", label: "Lab 3", match: (p: string) => p.includes("/lab3") },
  { href: "/labs/lab4", id: "wd-lab4-link", label: "Lab 4", match: (p: string) => p.includes("/lab4") },
  { href: "/labs/lab5", id: "wd-lab5-link", label: "Lab 5", match: () => false },
  { href: "/", id: "wd-kambaz-link", label: "Kambaz", match: () => false },
  { href: "/book/ch1", id: "wd-toc-book-link", label: "Chapter 1", match: () => false },
  { href: "https://kambaz.dev/book/ch3", id: "wd-book-ch3-link", label: "Book Ch3", match: () => false },
] as const;

const linkClass =
  "block rounded px-2 py-1 text-sm text-blue-700 no-underline hover:bg-neutral-100";
const activeClass =
  "block rounded bg-blue-600 px-2 py-1 text-sm font-medium text-white no-underline";

export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-toc">
      <h5>Ratnesh Kherudkar</h5>
      <em>Learning to build it end to end.</em>
      <br />
      <a href="https://github.com/r4tnx" target="_blank" rel="noreferrer">
        GitHub
      </a>
      <ul className="m-0 mt-2 list-none p-0">
        {LINKS.map((link) => {
          const active = link.match(pathname);
          return (
            <li key={link.id} className="mb-1">
              <Link
                href={link.href}
                id={link.id}
                className={active ? activeClass : linkClass}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
