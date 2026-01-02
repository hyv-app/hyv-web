"use client"

import { useTopBarVisibility } from "@/hooks/useTopBarVisibility";
import { Button } from "@/components/ui/button";
import { Home, Compass, Bookmark, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { isVisible: isTopBarVisible, isAtTop } = useTopBarVisibility();

    // Calculate sidebar top position based on TopBar visibility
    const sidebarTop = isAtTop || isTopBarVisible ? "7rem" : "1.5rem";

    return (
        <>
            {/* Mobile and Tablet */}
            <div className="flex lg:hidden flex-col min-h-dvh gap-12 lg:gap-16">
                {children}
            </div>
            {/* Larger screens */}
            <div className="hidden lg:flex gap-6">
                {/* Sidebar */}
                <div
                    className="w-84 border border-neutral-200 dark:border-neutral-800 p-4 rounded-xl flex flex-col justify-between h-128 max-h-[calc(100dvh-10rem)] sticky transition-all duration-300 ease-in-out"
                    style={{ top: sidebarTop }}
                >
                    <nav className="flex flex-col gap-2 font-medium">
                        <Link href="/user/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                            <Home className="size-5" />
                            <span>Home</span>
                        </Link>
                        <Link href="/user/explore" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                            <Compass className="size-5" />
                            <span>Explore</span>
                        </Link>
                        <Link href="/user/bookmarks" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                            <Bookmark className="size-5" />
                            <span>Bookmarks</span>
                        </Link>
                        <Link href="/user/chats" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                            <MessageCircle className="size-5" />
                            <span>Chats</span>
                        </Link>
                    </nav>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer font-secondary">
                            <Avatar className="size-9">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1">
                                <div className="text-sm font-secondary w-64 overflow-hidden whitespace-nowrap text-ellipsis">Indrajit</div>
                                <span className="text-xs text-muted-foreground uppercase">@indrajit</span>
                            </div>
                        </div>
                        <Button className="w-full rounded-full uppercase" size="lg">
                            Post
                        </Button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="min-w-2/3 flex flex-col flex-1 min-h-dvh gap-12 lg:gap-16">{children}</div>
            </div>
        </>
    );
}

export default UserLayout;
