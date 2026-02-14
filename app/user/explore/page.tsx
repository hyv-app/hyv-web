"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ActivityCard from "@/components/cards/ActivityCard";
import RentalCard from "@/components/cards/RentalCard";
import ItemCard from "@/components/cards/ItemCard";
import { TrendingUp, Flame, Sparkles } from "lucide-react";

type TabType = "all" | "activities" | "rentals" | "items";

const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const tabs: { value: TabType; label: string; icon: React.ReactNode }[] = [
    { value: "all", label: "All", icon: null },
    { value: "activities", label: "Activities", icon: <TrendingUp className="size-4" /> },
    { value: "rentals", label: "Rentals", icon: <Flame className="size-4" /> },
    { value: "items", label: "Items", icon: <Sparkles className="size-4" /> },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="text-3xl md:text-4xl font-semibold">
            Explore
          </div>
          <p className="text-muted-foreground text-lg">
            Discover trending activities, rentals, and items in your area
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {tabs.map((tab) => (
            <Button
              key={tab.value}
              variant={activeTab === tab.value ? "default" : "outline"}
              className={`rounded-full shrink-0 ${
                activeTab === tab.value
                  ? ""
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.icon}
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Trending Activities */}
      {(activeTab === "all" || activeTab === "activities") && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="size-6 text-lime-600 dark:text-lime-400" />
            <div className="text-2xl font-medium">Trending Activities</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <ActivityCard
              title="Weekend Hiking Group"
              description="Join us for a scenic trail hike through Nandi Hills. Beginner-friendly with photo stops and breakfast."
              host="Rohan"
              startTime="Sat, 25 Jan at 6:00 AM"
              endTime="11:00 AM"
              locationDetails="Nandi Hills Base, Bangalore"
              maxParticipants={20}
              currentParticipants={17}
              isTrending
            />
            <ActivityCard
              title="Pottery Workshop"
              description="Learn hand-building and wheel-throwing techniques. All materials provided. Beginners welcome!"
              host="Maya"
              startTime="Sun, 26 Jan at 3:00 PM"
              endTime="6:00 PM"
              locationDetails="Clay Studio, Jayanagar"
              maxParticipants={12}
              currentParticipants={9}
              isTrending
            />
            <ActivityCard
              title="Sunset Photography Walk"
              description="Capture golden hour shots around iconic Bangalore spots. Tips from a professional photographer."
              host="Arjun"
              startTime="Fri, 31 Jan at 5:30 PM"
              endTime="7:30 PM"
              locationDetails="Lalbagh Botanical Garden"
              maxParticipants={15}
              currentParticipants={13}
              isTrending
            />
            <ActivityCard
              title="Spanish Conversation Meetup"
              description="Practice conversational Spanish with fellow learners. All levels welcome, casual and fun environment."
              host="Sofia"
              startTime="Thu, 30 Jan at 7:00 PM"
              endTime="9:00 PM"
              locationDetails="Brew & Churn, Koramangala"
              maxParticipants={10}
              currentParticipants={7}
            />
            <ActivityCard
              title="Tech Startup Mixer"
              description="Network with founders, developers, and investors. Lightning talks and open discussion."
              host="Vikram"
              startTime="Wed, 29 Jan at 6:00 PM"
              endTime="9:00 PM"
              locationDetails="91springboard, Indiranagar"
              maxParticipants={50}
              currentParticipants={38}
              isTrending
            />
            <ActivityCard
              title="Beach Volleyball Tournament"
              description="Friendly 4v4 tournament on the sand. Prizes for winners, fun for everyone!"
              host="Anjali"
              startTime="Sat, 1 Feb at 4:00 PM"
              endTime="7:00 PM"
              locationDetails="Baga Beach, Goa"
              maxParticipants={32}
              currentParticipants={28}
            />
          </div>
        </div>
      )}

      {/* Hot Rentals */}
      {(activeTab === "all" || activeTab === "rentals") && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Flame className="size-6 text-orange-600 dark:text-orange-400" />
            <div className="text-2xl font-medium">Hot Rentals</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <RentalCard
              type="APARTMENT"
              title="Luxury 3BHK with Pool Access"
              description="Fully furnished apartment in gated community. Swimming pool, gym, 24x7 security. Ready to move in."
              price={45000}
              locationDetails="HSR Layout, Bangalore"
              tags={["Pool", "Gym", "Furnished", "Security"]}
              ownerName="Rajesh"
              isBoosted
            />
            <RentalCard
              type="ROOM"
              title="Cozy Room for Working Professional"
              description="Single occupancy room with balcony. Shared common areas. Centrally located near tech parks."
              price={15000}
              locationDetails="Marathahalli, Bangalore"
              tags={["Balcony", "Near Metro", "WiFi"]}
              ownerName="Priya"
              isBoosted
            />
            <RentalCard
              type="APARTMENT"
              title="Studio Near Airport"
              description="Compact studio perfect for frequent travelers. Modern amenities, parking included."
              price={18000}
              locationDetails="Hebbal, Bangalore"
              tags={["Studio", "Parking", "WiFi", "AC"]}
              ownerName="Suresh"
            />
            <RentalCard
              type="ROOM"
              title="Female Flatmate Wanted - HSR"
              description="Looking for one more flatmate in a 3BHK. Clean, friendly environment. Vegetarian kitchen."
              price={10000}
              locationDetails="HSR Layout, Bangalore"
              tags={["Female Only", "Vegetarian", "WiFi"]}
              ownerName="Divya"
              isBoosted
            />
            <RentalCard
              type="APARTMENT"
              title="Penthouse with Terrace Garden"
              description="Spacious 4BHK penthouse with private terrace. Modular kitchen, premium fittings."
              price={85000}
              locationDetails="Indiranagar, Bangalore"
              tags={["Terrace", "Luxury", "Parking", "Pet Friendly"]}
              ownerName="Aditya"
            />
            <RentalCard
              type="ROOM"
              title="Budget Room in BTM Layout"
              description="Affordable single room with basic amenities. Good for students and young professionals."
              price={7500}
              locationDetails="BTM Layout, Bangalore"
              tags={["Budget Friendly", "WiFi", "Attached Bath"]}
              ownerName="Manoj"
            />
          </div>
        </div>
      )}

      {/* Trending Items */}
      {(activeTab === "all" || activeTab === "items") && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="size-6 text-cyan-600 dark:text-cyan-400" />
            <div className="text-2xl font-medium">Trending Items</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            <ItemCard
              category="ELECTRONICS"
              title="iPhone 15 Pro Max"
              description="256GB, Blue Titanium. Mint condition, used for 3 months. Apple Care+ valid till Dec 2024."
              price={110000}
              locationDetails="Koramangala, Bangalore"
              tags={["Like New", "Apple Care"]}
              sellerName="Karthik"
              status="AVAILABLE"
              isBoosted
            />
            <ItemCard
              category="TICKETS"
              title="Coldplay Mumbai Concert"
              description="4 tickets for Jan 21 show. Section A, row 5. Can't go due to emergency. Selling at cost."
              price={48000}
              locationDetails="Navi Mumbai, Maharashtra"
              tags={["Premium Seats", "4 Tickets"]}
              sellerName="Neha"
              status="AVAILABLE"
              isBoosted
            />
            <ItemCard
              category="VEHICLES"
              title="Royal Enfield Classic 350"
              description="2021 model, well maintained. New tires, serviced last month. Single owner."
              price={135000}
              locationDetails="Whitefield, Bangalore"
              tags={["Single Owner", "Serviced"]}
              sellerName="Rahul"
              status="AVAILABLE"
            />
            <ItemCard
              category="FURNITURE"
              title="L-Shaped Sofa Set"
              description="Premium fabric, grey color. 3 years old but excellent condition. Moving sale."
              price={25000}
              locationDetails="Indiranagar, Bangalore"
              tags={["Like New", "Premium"]}
              sellerName="Shreya"
              status="RESERVED"
            />
            <ItemCard
              category="ELECTRONICS"
              title="PS5 Digital Edition Bundle"
              description="Includes 5 games, extra controller, charging dock. Barely used, bought 6 months ago."
              price={42000}
              locationDetails="JP Nagar, Bangalore"
              tags={["Bundle", "Extra Controller"]}
              sellerName="Akash"
              status="AVAILABLE"
              isBoosted
            />
            <ItemCard
              category="BOOKS"
              title="Engineering Textbooks Set"
              description="Complete CSE 1st-year books. Excellent condition with notes. Saves 70% of new price."
              price={3500}
              locationDetails="Jayanagar, Bangalore"
              tags={["With Notes", "Great Deal"]}
              sellerName="Ravi"
              status="AVAILABLE"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ExplorePage;
