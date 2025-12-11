"use client"

import { APP_NAME } from "@/constants/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    // Only show footer on the landing page or login page
    const shouldShowFooter = pathname === "/" || pathname.includes("/login");

    if (!shouldShowFooter) {
        return null;
    }

    return (
        <div className="lg:sticky z-0 bottom-0 w-full max-w-[1440px] mx-auto h-80 bg-foreground flex justify-center items-center">
            <div className="relative overflow-hidden w-full h-full flex justify-end p-6 text-right items-start text-background">
                <div className="flex flex-row space-x-12 sm:space-x-16 md:space-x-24 text-lg md:text-xl font-secondary">
                    <ul>
                        <li>Created with ❤️</li>
                        <li className="inline-flex gap-2">by
                            <Link href="https://indrajitvijayakumar.in" target="_blank" className="underline">
                                Indrajit
                            </Link>
                        </li>

                    </ul>
                    <ul>
                        <Link href="https://github.com/hyv-app" target="_blank">
                            <li className="hover:underline cursor-pointer">Github</li>
                        </Link>
                    </ul>
                </div>
                <h2 className="absolute bottom-0 left-0 translate-y-1/6 text-[156px] sm:text-[192px] bg-linear-to-r from-violet-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent">
                    {APP_NAME}
                </h2>
            </div>
        </div>
    );
};
export default Footer;