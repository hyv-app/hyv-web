"use client"

import { Button } from "@/components/ui/button";
import { Zap, Star, TrendingUp, Shield, Clock, Sparkles, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

const ProPageContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirect') || '/';

    const handleSubscribe = () => {
        // TODO: Implement actual payment/subscription logic
        console.log('Subscribing to PRO...');
        // After successful subscription, redirect to the specified URL
        router.push(redirectUrl);
    };

    const features = [
        {
            icon: TrendingUp,
            title: "Priority Listings",
            description: "Your listings appear at the top of search results, getting 5x more visibility"
        },
        {
            icon: Shield,
            title: "Verified Badge",
            description: "Stand out with a verified PRO badge that builds instant trust with customers"
        },
        {
            icon: Sparkles,
            title: "Unlimited Posts",
            description: "Post unlimited services and products without any restrictions"
        },
        {
            icon: Clock,
            title: "24/7 Priority Support",
            description: "Get instant support from our dedicated PRO support team anytime"
        },
        {
            icon: Star,
            title: "Advanced Analytics",
            description: "Deep insights into your performance with detailed analytics and reports"
        },
        {
            icon: Zap,
            title: "Premium Tools",
            description: "Access exclusive tools to manage and grow your business efficiently"
        }
    ];

    return (
        <div className="flex flex-col items-center gap-12 md:gap-16 max-w-6xl mx-auto w-full">
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center gap-6 w-full">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
                    Upgrade to <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-cyan-400 to-lime-400">PRO</span>
                </h1>
            </div>

            {/* Pricing Card */}
            <div className="w-full max-w-md">
                <div className="relative rounded-3xl border-2 border-foreground p-8 shadow-lg">
                    {/* Popular Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <div className="border border-violet-400 bg-background text-foreground px-6 py-1.5 rounded-full text-sm font-medium font-secondary">
                            Costs less than a pizza 🍕
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 items-center">
                        {/* <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-linear-to-br bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                                <Zap className="size-8" />
                            </div>
                        </div> */}

                        <div className="text-center">
                            <div className="flex items-baseline justify-center gap-2 font-secondary">
                                <span className="text-5xl font-bold">₹299</span>
                                <span className="text-muted-foreground">FOR 3 months</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 font-secondary">
                                or ₹1000/year (save 20%)
                            </p>
                        </div>

                        <Button
                            onClick={handleSubscribe}
                            className="w-full h-12 text-lg rounded-full bg-linear-to-r shadow-lg font-secondary"
                        >
                            Get PRO
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-medium text-center mb-8">
                    Everything you need 🥳
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "flex flex-col gap-4 p-6 rounded-2xl border bg-card transition-all hover:shadow-md hover:border-foreground",
                                )}
                            >
                                <div className="p-2 rounded-full w-fit bg-cyan-100 dark:bg-cyan-900">
                                    <Icon className="size-6" />
                                </div>
                                <div className="text-lg font-semibold">{feature.title}</div>
                                <p className="text-trim leading-loose text-muted-foreground font-secondary">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* FAQ or Trust Section */}
            <div className="w-full text-center text-muted-foreground font-secondary">
                <p>More than 1000 people have bought PRO 😎</p>
            </div>
        </div>
    );
};

const ProPage = () => {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <ProPageContent />
        </Suspense>
    );
};

export default ProPage;
