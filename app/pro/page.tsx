"use client"

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/constants/common";
import { Check, Zap, Star, TrendingUp, Shield, Clock, Sparkles, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const ProPage = () => {
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

    const benefits = [
        "5x more profile views",
        "Priority customer support",
        "Featured in search results",
        "Advanced business analytics",
        "Unlimited product listings",
        "Remove all advertisements",
        "Early access to new features",
        "Custom profile customization"
    ];

    return (
        <div className="flex flex-col items-center gap-12 md:gap-16 max-w-6xl mx-auto w-full">
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center gap-6 w-full">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    Upgrade to <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-pink-500">PRO</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-secondary">
                    Take your {APP_NAME} experience to the next level with premium features designed to help you succeed
                </p>
            </div>

            {/* Pricing Card */}
            <div className="w-full max-w-md">
                <div className="relative rounded-3xl border-2 border-orange-500 bg-linear-to-b from-orange-50/50 to-background dark:from-orange-950/20 dark:to-background p-8 shadow-2xl">
                    {/* Popular Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <div className="bg-linear-to-r from-orange-500 to-pink-500 text-white px-6 py-1.5 rounded-full text-sm font-medium font-secondary">
                            Most Popular
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 items-center">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-2xl bg-linear-to-br from-orange-500 to-pink-500">
                                <Zap className="size-8 text-white" />
                            </div>
                        </div>

                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-2">PRO Plan</h2>
                            <div className="flex items-baseline justify-center gap-2 font-secondary">
                                <span className="text-5xl font-bold">₹499</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2 font-secondary">
                                or ₹4,999/year (Save 17%)
                            </p>
                        </div>

                        <Button 
                            onClick={handleSubscribe}
                            className="w-full h-12 text-lg rounded-full bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg font-secondary"
                        >
                            Subscribe Now
                            <ArrowRight className="size-5 ml-2" />
                        </Button>

                        <p className="text-xs text-center text-muted-foreground font-secondary">
                            Cancel anytime • 14-day money-back guarantee
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    Everything you need to grow
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div 
                                key={index}
                                className={cn(
                                    "flex flex-col gap-3 p-6 rounded-2xl border bg-card transition-all hover:shadow-lg hover:border-orange-500/50",
                                    "animate-fade-in-up"
                                )}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-950/30 w-fit">
                                    <Icon className="size-6 text-orange-600 dark:text-orange-400" />
                                </div>
                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground font-secondary">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Benefits List */}
            <div className="w-full bg-linear-to-br from-orange-50 to-pink-50 dark:from-orange-950/20 dark:to-pink-950/20 rounded-3xl p-8 md:p-12 border">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    {`What's included`}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index}
                            className="flex items-center gap-3"
                        >
                            <div className="shrink-0 p-1 rounded-full bg-linear-to-br from-orange-500 to-pink-500">
                                <Check className="size-4 text-white" />
                            </div>
                            <span className="text-sm md:text-base font-secondary">{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="w-full text-center bg-linear-to-r from-orange-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to go PRO?
                </h2>
                <p className="text-lg mb-6 opacity-90 font-secondary">
                    Join thousands of successful professionals on {APP_NAME}
                </p>
                <Button 
                    onClick={handleSubscribe}
                    size="lg"
                    className="h-14 px-8 text-lg rounded-full bg-white text-orange-600 hover:bg-gray-100 font-secondary"
                >
                    Get Started Now
                    <ArrowRight className="size-5 ml-2" />
                </Button>
            </div>

            {/* FAQ or Trust Section */}
            <div className="w-full text-center text-sm text-muted-foreground pb-8 font-secondary">
                <p>Trusted by 10,000+ professionals • 4.9/5 rating • 99% satisfaction rate</p>
            </div>
        </div>
    );
};

export default ProPage;
