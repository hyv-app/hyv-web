"use client"

import { useTopBarVisibility } from "@/hooks/useTopBarVisibility";

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
                    className="w-84 bg-neutral-100 dark:bg-neutral-900 p-6 rounded-xl flex items-center justify-center h-128 max-h-[calc(100dvh-10rem)] sticky font-medium transition-all duration-300 ease-in-out"
                    style={{ top: sidebarTop }}
                >
                    Sidebar
                </div>

                {/* Main Content */}
                <div className="min-w-2/3 flex flex-col flex-1 min-h-dvh gap-12 lg:gap-16">{children}</div>
            </div>
        </>
    );
}

export default UserLayout;
