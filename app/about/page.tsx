import { APP_NAME } from "@/constants/common";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `About - ${APP_NAME}`,
};

const AboutPage = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="text-3xl/[1.2] xs:text-4xl/[1.2] lg:text-5xl/[1.2] font-medium tracking-tight w-fit px-4 py-2 border-l-4 text-trim">
                An AI-first utility platform
                <br />
                <span className="text-muted-foreground">for everything around you.</span>
            </div>

            {/* Problem Statement */}
            <section className="space-y-6 max-w-3xl">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-10 bg-lime-400 rounded-full" />
                    <div className="text-xl md:text-2xl font-semibold">The Problem We Solve</div>
                </div>
                <div className="leading-9 font-secondary text-trim">
                    Modern urban residents rely on fragmented, untrustworthy platforms like WhatsApp, Facebook Groups, and OLX for core real-world needs. This creates <span className="font-semibold">high friction, rampant fraud, and ineffective discovery</span>. {APP_NAME} consolidates everything into a single, trustworthy ecosystem powered by AI.
                </div>
            </section>

            {/* AI-First Interface */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-10 bg-lime-400 rounded-full" />
                    <div className="text-xl md:text-2xl font-semibold">AI-First Interface</div>
                </div>
                <div className="leading-9 max-w-2xl font-secondary text-trim">
                    Our primary interface is an AI-powered search that understands complex, natural language queries. Instead of manual filtering, simply ask: <span className="font-semibold italic">{`"Find me a verified roommate near Whitefield who likes board games and has a budget of 15k"`}</span>
                </div>
                <div className="text-sm/loose text-muted-foreground font-secondary max-w-2xl">
                    Powered by vector embeddings and semantic search, the AI instantly finds hyper-relevant matches tailored to your exact needs.
                </div>
            </section>

            {/* Core Utilities */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-10 bg-lime-400 rounded-full" />
                    <div className="text-xl md:text-2xl font-semibold">Core Utilities</div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 font-secondary text-trim">
                    <div className="space-y-2 p-4 rounded-xl border border-cyan-400 bg-cyan-50/50 dark:bg-cyan-950/50 shadow-lg">
                        <div className="font-semibold italic">Roommate Finder</div>
                        <div className="leading-9">
                            Find verified roommates and tenants through AI-powered matching. Filter by budget, location, lifestyle preferences (noise, food habits, amenities), and shared interests.
                        </div>
                    </div>
                    <div className="space-y-2 p-4 rounded-xl border border-cyan-400 bg-cyan-50/50 dark:bg-cyan-950/50 shadow-lg">
                        <div className="font-semibold italic">Buy & Sell Marketplace</div>
                        <div className="leading-9">
                            Browse and sell items with confidence. Email and phone verified listings are prioritized. Automated scam detection and reverse image scanning for your safety.
                        </div>
                    </div>
                    <div className="space-y-2 p-4 rounded-xl border border-cyan-400 bg-cyan-50/50 dark:bg-cyan-950/50 shadow-lg">
                        <div className="font-semibold italic">Activity Discovery</div>
                        <div className="leading-9">
                            Discover local activities and communities within your radius. Create or join groups for running, reading, food walks, and more.
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Differentiators */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-10 bg-lime-400 rounded-full" />
                    <div className="text-xl md:text-2xl font-semibold">Why Choose {APP_NAME}</div>
                </div>
                <div className="space-y-6 font-secondary max-w-2xl text-trim">
                    <div>
                        <div className="font-semibold mb-1 italic">Hyper-Local Native</div>
                        <div className="leading-9">
                            Geo-indexed for block-level relevance. No more sifting through irrelevant results from across the city. Get what matters in your neighborhood.
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold mb-1 italic">Trusted Ecosystem</div>
                        <div className="leading-9">
                            Multi-level verification system with email and phone confirmation. Verified users get priority visibility, building a truly trustworthy community.
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold mb-1 italic">Super App Structure</div>
                        <div className="leading-9">
                            One platform for rentals, marketplace, and activities. No need to juggle multiple apps—everything you need is in one place.
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className="space-y-6 max-w-3xl">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-10 bg-lime-400 rounded-full" />
                    <div className="text-xl md:text-2xl font-semibold">Our Vision</div>
                </div>
                <div className="leading-9 font-secondary text-trim">
                    {APP_NAME} is building the infrastructure layer for hyper-local communities. Future enhancements include <span className="font-semibold">Hyves</span>—thematic meta-communities that aggregate activities, marketplace listings, and discussion forums under major interest groups. Together, we are creating a safer, smarter way to connect with your neighborhood.
                </div>
            </section>
        </>
    )
}

export default AboutPage;