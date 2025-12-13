"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const MetaThemeAndBgColor = () => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!mounted) return

        // Use resolvedTheme to get the actual theme (handles system theme)
        // If resolvedTheme is not available yet, check the HTML class or use theme
        const currentTheme = resolvedTheme ||
            (document.documentElement.classList.contains('dark') ? 'dark' : 'light') ||
            theme ||
            'light'

        // Find or update existing theme-color meta tag
        let themeMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement
        if (!themeMeta) {
            themeMeta = document.createElement('meta')
            themeMeta.setAttribute('name', 'theme-color')
            document.head.appendChild(themeMeta)
        }

        // Find or update existing background-color meta tag
        let bgMeta = document.querySelector('meta[name="background-color"]') as HTMLMetaElement
        if (!bgMeta) {
            bgMeta = document.createElement('meta')
            bgMeta.setAttribute('name', 'background-color')
            document.head.appendChild(bgMeta)
        }

        // Set colors based on current theme
        const isDark = currentTheme === 'dark'
        const color = isDark ? '#121212' : '#ffffff'

        themeMeta.setAttribute('content', color)
        bgMeta.setAttribute('content', color)
    }, [theme, resolvedTheme, mounted])

    return null
}

export default MetaThemeAndBgColor