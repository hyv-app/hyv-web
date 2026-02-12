"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="w-full max-w-md space-y-8">
        {/* Headline */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">
            Welcome
          </h1>
          <p className="text-muted-foreground font-secondary">
            {showOtp 
              ? "Enter the code sent to your phone" 
              : "Enter your phone number to get started"}
          </p>
        </div>

        {/* Form */}
        {!showOtp ? (
          <form onSubmit={handlePhoneSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="h-12 text-lg font-secondary"
                maxLength={10}
                autoFocus
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 font-secondary"
              disabled={phoneNumber.length !== 10 || isLoading}
            >
              {isLoading ? "Sending..." : "Continue"}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                className="h-12 text-lg tracking-widest font-secondary"
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
                className="w-full h-12 font-secondary"
                disabled={otp.length !== 6 || isLoading}
              >
                {isLoading ? "Verifying..." : "Verify"}
              </Button>
              <Button 
                type="button"
                variant="ghost"
                className="w-full h-12 font-secondary"
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
  );
};

export default LoginPage;
