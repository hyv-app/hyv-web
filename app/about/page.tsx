import { APP_NAME } from "@/constants/common";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `About - ${APP_NAME}`,
};

const AboutPage = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="text-3xl/[1.2] xs:text-4xl/[1.2] lg:text-5xl/[1.2] font-medium tracking-tight w-fit px-4 py-2 border-l-4" style={{
                textBox: "trim-both cap alphabetic"
            }}>
                An AI-first utility platform
                <br />
                <span className="text-muted-foreground">for everything around you.</span>
            </div>

            {/* AI-First Interface */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-10 bg-lime-400 rounded-full" />
                    <div className="text-xl md:text-2xl font-semibold">AI-First Interface</div>
                </div>
                <div className="leading-loose max-w-2xl font-secondary" style={{
                    textBox: "trim-both cap alphabetic"
                }}>
                    Our primary interface is an AI Utility Chatbot that understands natural language queries.
                    Instead of manual search, simply ask: <span className="font-semibold italic">{`"Roommates near Whitefield who are vegetarian and have a budget of 25k"`}</span>
                </div>
            </section>

            {/* Core Features */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-10 bg-lime-400 rounded-full" />
                    <div className="text-xl md:text-2xl font-semibold">Core Utilities</div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 font-secondary" style={{
                    textBox: "trim-both cap alphabetic"
                }}>
                    <div className="space-y-2 p-4 rounded-xl border border-cyan-400 bg-cyan-50/50 dark:bg-cyan-950/50 shadow-lg">
                        <div className="font-semibold italic">Roommate Finder</div>
                        <div className="leading-loose">
                            AI-powered matching based on budget, location, lifestyle preferences, and interests.
                        </div>
                    </div>
                    <div className="space-y-2 p-4 rounded-xl border border-cyan-400 bg-cyan-50/50 dark:bg-cyan-950/50 shadow-lg">
                        <div className="font-semibold italic">Marketplace</div>
                        <div className="leading-loose">
                            Buy and sell with trust. Verified listings prioritized, automated scam detection.
                        </div>
                    </div>
                    <div className="space-y-2 p-4 rounded-xl border border-cyan-400 bg-cyan-50/50 dark:bg-cyan-950/50 shadow-lg">
                        <div className="font-semibold italic">Activity Discovery</div>
                        <div className="leading-loose">
                            Discover local activities and communities within your radius. Create or join groups.
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Differentiators */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <div className="h-1 w-10 bg-lime-400 rounded-full" />
                    <div className="text-xl md:text-2xl font-semibold">Why {APP_NAME}</div>
                </div>
                <div className="space-y-6 font-secondary max-w-2xl" style={{
                    textBox: "trim-both cap alphabetic"
                }}>
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