import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { APP_DESCRIPTION, APP_NAME } from "@/constants/common";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/providers/ThemeProvider";

const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="hyv" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>
      <body
        className={`${ibm_plex_sans.variable} antialiased selection:bg-lime-400`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopBar />
          <div className="flex flex-col min-h-dvh gap-12 lg:gap-16 p-4 lg:p-6 pb-12 lg:pb-16 relative z-10 bg-background max-w-[1440px] mx-auto">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;