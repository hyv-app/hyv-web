"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_NAME, TOPBAR_SCROLL_THRESHOLD, TOPBAR_SCROLL_UP_THRESHOLD } from "@/constants/common";
import Link from "next/link";
import { Bell, MapPin, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

const TopBar = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [isAtTop, setIsAtTop] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const scrollUpDistanceRef = useRef<number>(0);

    useEffect(() => {
        // Initialize with current scroll position
        const initializeScrollPosition = () => {
            const currentScrollY = window.scrollY;
            setLastScrollY(currentScrollY);
            setIsAtTop(currentScrollY < TOPBAR_SCROLL_THRESHOLD);
        }

        initializeScrollPosition();

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if we're at the top
            setIsAtTop(currentScrollY < TOPBAR_SCROLL_THRESHOLD);

            // Only apply show/hide logic when not at top
            if (currentScrollY >= TOPBAR_SCROLL_THRESHOLD) {
                // Show TopBar when scrolling up (only after threshold)
                if (currentScrollY < lastScrollY) {
                    const distanceScrolledUp = lastScrollY - currentScrollY;
                    scrollUpDistanceRef.current += distanceScrolledUp;

                    if (scrollUpDistanceRef.current >= TOPBAR_SCROLL_UP_THRESHOLD) {
                        setIsVisible(true);
                        scrollUpDistanceRef.current = 0; // Reset after showing
                    }
                }
                // Hide TopBar when scrolling down (but only after 100px to avoid flickering)
                else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setIsVisible(false);
                    scrollUpDistanceRef.current = 0; // Reset when scrolling down
                }
            } else {
                // Always visible when at top
                setIsVisible(true);
                scrollUpDistanceRef.current = 0; // Reset when at top
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={cn(
            "sticky top-0 z-50 transition-all ease-in-out w-full max-w-[1440px] mx-auto p-4 lg:p-6 flex justify-between items-center mb-4",
            // Background and border styling based on scroll position
            isAtTop
                ? "bg-transparent"
                : "bg-background/75 backdrop-blur supports-backdrop-filter:bg-background/75",
            // Show/hide based on scroll direction (only when not at top)
            !isAtTop && !isVisible && "-translate-y-full"
        )}>
            <div className="flex items-center gap-3 h-6">
                {/* Logo and app name */}
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.svg" alt={`${APP_NAME} logo`} width={32} height={32} />
                    <div className="text-lg md:text-xl">{APP_NAME}</div>
                </Link>
                <Separator orientation="vertical" />
                <Button
                    size="icon"
                    className="rounded-full"
                    variant="outline"
                // style={{ animation: "mapPinPulse 1.4s ease-in-out infinite" }}
                >
                    <MapPin className="size-4" />
                </Button>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
                <Button className="bg-orange-50 text-orange-600 rounded-full hover:bg-orange-600 hover:text-white gap-1">
                    <Zap className="size-4" />
                    <span>Get PRO</span>
                </Button>
                <Button size="icon" className="rounded-full border-violet-400 hover:bg-violet-50" variant="outline">
                    <Bell className="size-4" />
                </Button>
                <Button className="hidden md:block rounded-full uppercase">Login</Button>
            </div>
        </div>
    )
}

export default TopBar;