"use client";
import { NavLinkProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname();
  // Determine if the current route matches the href
  const isActive = path === href;

  return (
    <Link href={href}>
      <span className="text-sm"
      style={{fontWeight:'300'}}
     
       
      >
        {children}
      </span>
    </Link>
  );
};

export default NavLink;
