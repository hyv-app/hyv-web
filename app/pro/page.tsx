"use client"

import { Button } from "@/components/ui/button";
import { Zap, Star, TrendingUp, Shield, Clock, Sparkles, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { MONTHLY_PRICE_INDIA } from "@/constants/common";

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
        <div className="flex flex-col items-center gap-12 max-w-6xl mx-auto w-full">
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center gap-6 w-full">
                <div className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                    Upgrade to <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-cyan-400 to-lime-400">PRO</span>
                </div>
            </div>

            {/* Pricing Card */}
            <div className="w-full max-w-md">
                <div className="relative rounded-3xl border p-4 shadow-lg bg-card">
                    {/* Popular Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 min-w-max">
                        <div className="border border-violet-400 bg-background text-foreground px-6 py-1.5 rounded-full text-sm font-medium font-secondary">
                            Costs less than a pizza 🍕
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 items-center mt-6">
                        {/* <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-linear-to-br bg-orange-50 text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
                                <Zap className="size-8" />
                            </div>
                        </div> */}

                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex items-baseline justify-center gap-2 font-secondary">
                                <span className="text-5xl font-bold">₹{MONTHLY_PRICE_INDIA}</span>
                                <span className="text-muted-foreground">PER MONTH</span>
                            </div>
                            <p className="text-sm text-muted-foreground font-secondary">
                                or ₹2000/year (save ~20%)
                            </p>
                        </div>

                        <Button
                            onClick={handleSubscribe}
                            className="w-full h-12 text-lg rounded-full bg-linear-to-r shadow-lg"
                        >
                            Get PRO
                        </Button>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="flex flex-col items-center gap-4 md:gap-6 w-full mt-4 lg:mt-8">
                <div className="text-2xl lg:text-3xl font-medium">
                    Everything you need 🥳
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "flex flex-col gap-1.5 p-4 rounded-2xl border bg-card shadow-lg",
                                )}
                            >
                                <div className="p-2 rounded-full w-fit bg-cyan-100 dark:bg-cyan-900 mb-3">
                                    <Icon className="size-6" />
                                </div>
                                <div className="text-lg font-semibold">{feature.title}</div>
                                <p className="leading-loose text-muted-foreground font-secondary">{feature.description}</p>
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
