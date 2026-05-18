'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();

    const isActive = href === pathname;
    return (
        <Link href={href} className={`${isActive && " rounded-md bg-[#0a9396]/30 text-md font-bold text-[#005f73] px-4 py-1"}`}>{children}</Link>
    );
};

export default NavLink;