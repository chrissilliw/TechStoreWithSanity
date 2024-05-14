"use client";
import { ILink } from "@/app/models/ILink";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  link: ILink;
}

const NavLink = ({ link }: NavLinkProps) => {
  const pathname = usePathname();
  return pathname === link.href ? (
    <Link href={`${link.href}`} className="font-bold">
      {link.title}
    </Link>
  ) : (
    <Link href={`${link.href}`} className="font-base">
      {link.title}
    </Link>
  );
};

export default NavLink;
