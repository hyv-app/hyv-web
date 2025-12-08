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
                <h1 className="text-3xl/[1.1] sm:text-4xl/[1.1] md:text-5xl/[1.1] font-medium tracking-tight">
                    An AI-first utility platform
                    <br />
                    <span className="text-muted-foreground">for everything around you</span>
                </h1>
                <div className="text-lg/relaxed md:text-xl/relaxed text-muted-foreground max-w-2xl">
                    {APP_NAME} consolidates fragmented platforms into a single, trusted ecosystem powered by Artificial Intelligence and hyper-local data.
                </div>
            </section>

            {/* AI-First Interface */}
            <section className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-lime-400 rounded-full" />
                    <div className="text-2xl 2xl:text-3xl font-semibold">AI-First Interface</div>
                </div>
                <div className="leading-loose max-w-2xl font-secondary">
                    Our primary interface is an AI Utility Chatbot that understands natural language queries.
                    Instead of manual search, simply ask: <span className="font-semibold italic">{`"Find me roommates
                        near Whitefield who are vegetarian and has a budget of 25k"`}</span>
                </div>
            </section>

            {/* Core Features */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-lime-400 rounded-full" />
                    <div className="text-2xl 2xl:text-3xl font-semibold">Core Utilities</div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 font-secondary">
                    <div className="space-y-2 p-4 rounded-lg border border-cyan-400 bg-card">
                        <div className="2xl:text-lg font-semibold italic">Roommate Finder</div>
                        <div className="leading-loose">
                            AI-powered matching based on budget, location, lifestyle preferences, and interests.
                        </div>
                    </div>
                    <div className="space-y-2 p-4 rounded-lg border border-cyan-400 bg-card">
                        <div className="2xl:text-lg font-semibold italic">Marketplace</div>
                        <div className="leading-loose">
                            Buy and sell with trust. Verified listings prioritized, automated scam detection.
                        </div>
                    </div>
                    <div className="space-y-2 p-4 rounded-lg border border-cyan-400 bg-card">
                        <div className="2xl:text-lg font-semibold italic">Activity Discovery</div>
                        <div className="leading-loose">
                            Discover local activities and communities within your radius. Create or join groups.
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Differentiators */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-12 bg-lime-400 rounded-full" />
                    <div className="text-2xl 2xl:text-3xl font-semibold">Why {APP_NAME}</div>
                </div>
                <div className="space-y-6 font-secondary">
                    <div>
                        <div className="font-semibold mb-1 italic">Hyper-local Native</div>
                        <div className="leading-loose">
                            Geo-indexed for block-level relevance, eliminating noise from irrelevant results.
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold mb-1 italic">Trusted Ecosystem</div>
                        <div className="leading-loose">
                            Multi-level verification system with Aadhaar KYC for high-assurance trust and safety.
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold mb-1 italic">Modular Utility</div>
                        <div className="leading-loose">
                            A Super App structure combining rentals, marketplace, and activities in one place.
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage;