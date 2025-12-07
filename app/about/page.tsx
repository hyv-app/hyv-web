import { APP_NAME } from "@/constants/common";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `About - ${APP_NAME}`,
};

const AboutPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-medium tracking-tight">
                    An AI-first utility platform
                    <br />
                    <span className="text-muted-foreground">for everything around you</span>
                </h1>
                <p className="text-lg 2xl:text-xl text-muted-foreground max-w-2xl">
                    Hyv consolidates fragmented platforms into a single, trusted ecosystem powered by Artificial Intelligence and hyper-local data.
                </p>
            </section>

            {/* AI-First Interface */}
            <section className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-lime-400 rounded-full" />
                    <h2 className="text-2xl 2xl:text-3xl font-semibold">AI-First Interface</h2>
                </div>
                <p className="leading-loose text-muted-foreground max-w-2xl font-secondary">
                    Our primary interface is an AI Utility Chatbot that understands natural language queries.
                    Instead of manual search, simply ask: <span className="text-foreground">{`"Find me a verified roommate
                        near Whitefield who is vegetarian and has a budget of 25k"`}</span>
                </p>
            </section>

            {/* Core Features */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-lime-400 rounded-full" />
                    <h2 className="text-2xl 2xl:text-3xl font-semibold">Core Utilities</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4 font-secondary">
                    <div className="space-y-2 p-4 rounded-lg border border-cyan-400 bg-card">
                        <h3 className="2xl:text-lg font-semibold">Roommate Finder</h3>
                        <p className="leading-loose text-muted-foreground">
                            AI-powered matching based on budget, location, lifestyle preferences, and interests.
                        </p>
                    </div>
                    <div className="space-y-2 p-4 rounded-lg border border-cyan-400 bg-card">
                        <h3 className="2xl:text-lg font-semibold">Marketplace</h3>
                        <p className="leading-loose text-muted-foreground">
                            Buy and sell with trust. Verified listings prioritized, automated scam detection.
                        </p>
                    </div>
                    <div className="space-y-2 p-4 rounded-lg border border-cyan-400 bg-card">
                        <h3 className="2xl:text-lg font-semibold">Activity Discovery</h3>
                        <p className="leading-loose text-muted-foreground">
                            Discover local activities and communities within your radius. Create or join groups.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Differentiators */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-lime-400 rounded-full" />
                    <h2 className="text-2xl 2xl:text-3xl font-semibold">Why Hyv</h2>
                </div>
                <div className="space-y-6 font-secondary">
                    <div>
                        <h3 className="font-medium mb-1">Hyper-local Native</h3>
                        <p className="leading-loose text-muted-foreground">
                            Geo-indexed for block-level relevance, eliminating noise from irrelevant results.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-1">Trusted Ecosystem</h3>
                        <p className="leading-loose text-muted-foreground">
                            Multi-level verification system with Aadhaar KYC for high-assurance trust and safety.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-1">Modular Utility</h3>
                        <p className="leading-loose text-muted-foreground">
                            A Super App structure combining rentals, marketplace, and activities in one place.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage;