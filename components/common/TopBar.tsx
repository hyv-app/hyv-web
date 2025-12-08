"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/constants/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopBar = () => {
    const pathname = usePathname();

    return (
        <div className="flex justify-between items-center">
            {/* Logo and app name */}
            <Link href="/" className="flex items-center gap-3.5">
                <Image src="/logo.svg" alt={`${APP_NAME} logo`} width={32} height={32} />
                <div className="hidden md:block text-xl">{APP_NAME}</div>
            </Link>
            {/* Login button */}
            <div className="flex items-center gap-2">
                {pathname === "/" && (
                    <Link href="/about">
                        <Button variant="outline" className="rounded-full">
                            {`What's hyv?`}
                        </Button>
                    </Link>
                )}
                <Button className="rounded-full uppercase">Login</Button>
            </div>
        </div>
    )
}

export default TopBar;