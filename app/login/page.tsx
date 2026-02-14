"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/constants/common";

const LoginPage = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsLoading(false);
    setShowOtp(true);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    // Redirect to user home after successful login
    router.push("/user/home");
  };

  const handleBack = () => {
    setShowOtp(false);
    setOtp("");
  };

  return (
    <div className="flex h-[calc(100dvh-12rem)] w-full gap-4">
      {/* Left Side - Decorative Gradient Box with Mosaic Pattern */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Mosaic tile pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-60">
          <div className="grid grid-cols-6 gap-2 h-full">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-lg ${i % 3 === 0
                    ? "bg-violet-400"
                    : i % 3 === 1
                      ? "bg-cyan-400"
                      : "bg-lime-400"
                  }`}
                style={{
                  opacity: 0.4 + (i % 5) * 0.12,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center border rounded-xl">
        <div className="w-full max-w-md space-y-8">
          {/* Headline */}
          <div className="text-center space-y-3">
            <h2 className="text-4xl font-medium tracking-tight">
              Welcome to {APP_NAME} 🥳
            </h2>
            <p className="text-muted-foreground text-lg font-secondary">
              {showOtp
                ? "Enter the OTP sent to your phone"
                : "Enter your phone number to login or register"}
            </p>
          </div>

          {/* Form */}
          {!showOtp ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted-foreground font-secondary uppercase">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="h-14 text-lg font-secondary"
                  maxLength={10}
                  autoFocus
                />
              </div>
              <Button
                type="submit"
                className="w-full h-14 text-lg"
                disabled={phoneNumber.length !== 10 || isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending OTP...
                  </span>
                ) : (
                  "Continue"
                )}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted-foreground font-secondary uppercase">
                  One-Time Password
                </label>
                <Input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="h-14 text-lg font-secondary"
                  maxLength={6}
                  autoFocus
                />
                <p className="text-sm text-muted-foreground text-center font-secondary">
                  Sent to +91 {phoneNumber}
                </p>
              </div>
              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full h-12 text-lg"
                  disabled={otp.length !== 6 || isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Verifying...
                    </span>
                  ) : (
                    "Verify & Login"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 uppercase"
                  onClick={handleBack}
                  disabled={isLoading}
                >
                  Change number
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
