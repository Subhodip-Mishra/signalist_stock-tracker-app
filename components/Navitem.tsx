"use client"
import React from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {NAV_ITEMS} from "@/lib/constants";

const NavItem = () => {
    const pathName = usePathname();

    // ✅ Accept href as parameter
    const isActive = (href: string) => {
        if (href === "/") return pathName === "/";
        return pathName.startsWith(href);
    };

    return (
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                    <Link
                        href={href}
                        className={`hover:text-yellow-500 transition-colors ${
                            isActive(href) ? "text-gray-100" : ""
                        }`}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavItem;