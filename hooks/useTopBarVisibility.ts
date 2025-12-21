import { useEffect, useRef, useState } from "react";
import { TOPBAR_SCROLL_THRESHOLD, TOPBAR_SCROLL_DISTANCE_THRESHOLD } from "@/constants/common";

export const useTopBarVisibility = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [isAtTop, setIsAtTop] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const scrollUpDistanceRef = useRef<number>(0);
    const scrollDownDistanceRef = useRef<number>(0);

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
                    scrollDownDistanceRef.current = 0; // Reset opposite direction accumulation

                    if (scrollUpDistanceRef.current >= TOPBAR_SCROLL_DISTANCE_THRESHOLD) {
                        setIsVisible(true);
                        scrollUpDistanceRef.current = 0; // Reset after showing
                    }
                }
                // Hide TopBar when scrolling down (only after threshold)
                else if (currentScrollY > lastScrollY) {
                    const distanceScrolledDown = currentScrollY - lastScrollY;
                    scrollDownDistanceRef.current += distanceScrolledDown;
                    scrollUpDistanceRef.current = 0; // Reset opposite direction accumulation

                    if (scrollDownDistanceRef.current >= TOPBAR_SCROLL_DISTANCE_THRESHOLD) {
                        setIsVisible(false);
                        scrollDownDistanceRef.current = 0; // Reset after hiding
                    }
                }
            } else {
                // Always visible when at top
                setIsVisible(true);
                scrollUpDistanceRef.current = 0; // Reset when at top
                scrollDownDistanceRef.current = 0;
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return { isVisible, isAtTop };
};
