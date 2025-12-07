import { APP_NAME } from "@/constants/common";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `About - ${APP_NAME}`,
};

const AboutPage = () => {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="space-y-4">
                <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-medium tracking-tight">
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
                    <div className="h-1 w-12 bg-lime-500 rounded-full" />
                    <h2 className="text-2xl 2xl:text-3xl font-semibold">AI-First Interface</h2>
                </div>
                <p className="2xl:text-lg text-muted-foreground max-w-2xl">
                    Our primary interface is an AI Utility Chatbot that understands natural language queries.
                    Instead of manual search, simply ask: <em className="text-foreground">{`"Find me a verified roommate
                        near Whitefield who is vegetarian and has a budget of 25k"`}</em>
                </p>
                <p className="text-sm 2xl:text-base text-muted-foreground">
                    Powered by vector embeddings and semantic search for instant, hyper-relevant matches.
                </p>
            </section>

            {/* Core Features */}
            <section className="space-y-8">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-lime-500 rounded-full" />
                    <h2 className="text-2xl 2xl:text-3xl font-semibold">Core Utilities</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2 p-6 rounded-lg border border-cyan-500 bg-card">
                        <h3 className="2xl:text-lg font-semibold">Roommate Finder</h3>
                        <p className="text-sm 2xl:text-base text-muted-foreground">
                            AI-powered matching based on budget, location, lifestyle preferences, and interests.
                        </p>
                    </div>
                    <div className="space-y-2 p-6 rounded-lg border border-cyan-500 bg-card">
                        <h3 className="2xl:text-lg font-semibold">Marketplace</h3>
                        <p className="text-sm 2xl:text-base text-muted-foreground">
                            Buy and sell with trust. Verified listings prioritized, automated scam detection.
                        </p>
                    </div>
                    <div className="space-y-2 p-6 rounded-lg border border-cyan-500 bg-card">
                        <h3 className="2xl:text-lg font-semibold">Activity Discovery</h3>
                        <p className="text-sm 2xl:text-base text-muted-foreground">
                            Discover local activities and communities within your radius. Create or join groups.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Differentiators */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-lime-500 rounded-full" />
                    <h2 className="text-2xl 2xl:text-3xl font-semibold">Why Hyv</h2>
                </div>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <div>
                            <h3 className="2xl:text-lg font-medium mb-1">Hyper-local Native</h3>
                            <p className="text-sm 2xl:text-base text-muted-foreground">
                                Geo-indexed for block-level relevance, eliminating noise from irrelevant results.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <div>
                            <h3 className="2xl:text-lg font-medium mb-1">Trusted Ecosystem</h3>
                            <p className="text-sm 2xl:text-base text-muted-foreground">
                                Multi-level verification system with Aadhaar KYC for high-assurance trust and safety.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <div>
                            <h3 className="2xl:text-lg font-medium mb-1">Modular Utility</h3>
                            <p className="text-sm 2xl:text-base text-muted-foreground">
                                A Super App structure combining rentals, marketplace, and activities in one place.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage;