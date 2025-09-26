import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navitem from "@/components/Navitem";
import UserDropdown from "@/components/UserDropdown";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper flex items-center justify-between">
                {/* ✅ Link only wraps the logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="logo"
                        width={140}
                        height={32}
                        className="h-8 w-auto cursor-pointer"
                    />
                </Link>

                {/* ✅ Nav stays outside the Link */}
                <nav className="hidden sm:block">
                    <Navitem />
                </nav>
                <UserDropdown/>
            </div>
        </header>
    );
};

export default Header;
