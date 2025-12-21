"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/constants/common";
import Link from "next/link";
import { Bell, MapPin, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import ThemeToggle from "../ThemeToggle";
import { useTopBarVisibility } from "@/hooks/useTopBarVisibility";

const TopBar = () => {
    const { isVisible, isAtTop } = useTopBarVisibility();

    return (
        <div className={cn(
            "sticky top-0 z-50 transition-all ease-in-out w-full max-w-[1440px] mx-auto p-4 lg:p-6 flex justify-between items-center mb-4",
            // Background and border styling based on scroll position
            isAtTop
                ? "bg-transparent"
                : "bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/80",
            // Show/hide based on scroll direction (only when not at top)
            !isAtTop && !isVisible && "-translate-y-full"
        )}>
            <div className="flex items-center gap-3 md:gap-4 h-6">
                {/* Logo and app name */}
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.svg" alt={`${APP_NAME} logo`} width={32} height={32} />
                    <div className="hidden xxs:block text-lg md:text-xl">{APP_NAME}</div>
                </Link>
                <Separator orientation="vertical" className="bg-muted-foreground" />
                <div className="flex items-center gap-3">
                    <Button
                        size="icon"
                        className="rounded-full"
                        variant="outline"
                    //  style={{ animation: "mapPinPulse 1.4s ease-in-out infinite" }}
                    >
                        <MapPin className="size-4" />
                    </Button>
                    <div className="hidden md:flex flex-col gap-1">
                        <div className="text-sm font-secondary w-64 overflow-hidden whitespace-nowrap text-ellipsis">
                            Prestige Falcon City, Anjanadri Layout, Kanakapura Road, Konanakunte
                        </div>
                        <div className="text-xs text-muted-foreground font-secondary uppercase">
                            BENGALURU
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
                <Button className="bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400 rounded-full hover:bg-orange-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white gap-1">
                    <Zap className="size-4" />
                    <span>PRO</span>
                </Button>
                <ThemeToggle />
                <Button size="icon" className="rounded-full border-violet-400 dark:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/50" variant="outline">
                    <Bell className="size-4" />
                </Button>
                <Button className="hidden md:block rounded-full uppercase">Login</Button>
            </div>
        </div>
    )
}

export default TopBar;
