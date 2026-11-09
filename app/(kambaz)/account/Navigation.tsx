"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const pathname = usePathname() ?? "";
  const links = currentUser
    ? ([{ href: "/account/profile", id: "wd-account-profile-link", label: "Profile" }] as const)
    : ([
        { href: "/account/signin", id: "wd-account-signin-link", label: "Signin" },
        { href: "/account/signup", id: "wd-account-signup-link", label: "Signup" },
      ] as const);
  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          id={link.id}
          className={
            pathname === link.href
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
