"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ActivityCard from "@/components/cards/ActivityCard";
import RentalCard from "@/components/cards/RentalCard";
import ItemCard from "@/components/cards/ItemCard";
import { Bookmark, Trash2 } from "lucide-react";

type TabType = "all" | "activities" | "rentals" | "items";

const BookmarksPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const tabs: { value: TabType; label: string }[] = [
    { value: "all", label: "All" },
    { value: "activities", label: "Activities" },
    { value: "rentals", label: "Rentals" },
    { value: "items", label: "Items" },
  ];

  // Mock saved counts
  const counts = {
    all: 8,
    activities: 2,
    rentals: 3,
    items: 3,
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <Bookmark className="size-8 text-violet-600 dark:text-violet-400" />
              <h1 className="text-3xl md:text-4xl font-semibold">
                Bookmarks
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Your saved items, rentals, and activities
            </p>
          </div>
          {counts[activeTab] > 0 && (
            <Button
              variant="outline"
              className="rounded-full border-red-400 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950"
            >
              <Trash2 className="size-4" />
              Clear All
            </Button>
          )}
        </div>

        {/* Tabs with counts */}
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
              {tab.label}
              <span
                className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${
                  activeTab === tab.value
                    ? "bg-primary-foreground/20"
                    : "bg-muted"
                }`}
              >
                {counts[tab.value]}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Saved Activities */}
      {(activeTab === "all" || activeTab === "activities") && counts.activities > 0 && (
        <div className="flex flex-col gap-4">
          {activeTab === "all" && (
            <h2 className="text-xl font-medium">Saved Activities</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <ActivityCard
              title="Morning Yoga Session"
              description="Start your day with mindful yoga practice. Suitable for all levels with modifications."
              host="Lakshmi"
              startTime="Sat, 1 Feb at 7:00 AM"
              endTime="8:30 AM"
              locationDetails="Cubbon Park, Bangalore"
              maxParticipants={20}
              currentParticipants={14}
            />
            <ActivityCard
              title="Cooking Class: Italian Cuisine"
              description="Learn to make authentic pasta, risotto, and tiramisu. All ingredients provided."
              host="Giovanni"
              startTime="Sun, 2 Feb at 11:00 AM"
              endTime="3:00 PM"
              locationDetails="Culinary Studio, Koramangala"
              maxParticipants={12}
              currentParticipants={8}
              isTrending
            />
          </div>
        </div>
      )}

      {/* Saved Rentals */}
      {(activeTab === "all" || activeTab === "rentals") && counts.rentals > 0 && (
        <div className="flex flex-col gap-4">
          {activeTab === "all" && (
            <h2 className="text-xl font-medium">Saved Rentals</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <RentalCard
              type="APARTMENT"
              title="Modern 2BHK with Balcony"
              description="Spacious apartment with natural lighting. Semi-furnished, ready to move. Peaceful locality."
              price={32000}
              locationDetails="Bellandur, Bangalore"
              tags={["Semi-Furnished", "Balcony", "Parking"]}
              ownerName="Venkat"
            />
            <RentalCard
              type="ROOM"
              title="Single Room in Tech Park Area"
              description="Private room with workspace. High-speed WiFi, housekeeping included."
              price={13000}
              locationDetails="Manyata Tech Park, Bangalore"
              tags={["WiFi", "Housekeeping", "AC"]}
              ownerName="Sneha"
              isBoosted
            />
            <RentalCard
              type="APARTMENT"
              title="1BHK Near Metro Station"
              description="Cozy apartment perfect for singles. Walking distance to metro, supermarkets nearby."
              price={18000}
              locationDetails="MG Road Metro, Bangalore"
              tags={["Metro Access", "Furnished"]}
              ownerName="Arjun"
            />
          </div>
        </div>
      )}

      {/* Saved Items */}
      {(activeTab === "all" || activeTab === "items") && counts.items > 0 && (
        <div className="flex flex-col gap-4">
          {activeTab === "all" && (
            <h2 className="text-xl font-medium">Saved Items</h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <ItemCard
              category="ELECTRONICS"
              title="Canon EOS R6 Camera"
              description="Professional mirrorless camera with 24-105mm lens. Low shutter count, like new condition."
              price={185000}
              locationDetails="Indiranagar, Bangalore"
              tags={["With Lens", "Like New"]}
              sellerName="Arjun"
              status="AVAILABLE"
              isBoosted
            />
            <ItemCard
              category="FURNITURE"
              title="Herman Miller Office Chair"
              description="Ergonomic office chair, barely used. Perfect for WFH setup. Original invoice available."
              price={28000}
              locationDetails="HSR Layout, Bangalore"
              tags={["Ergonomic", "Like New"]}
              sellerName="Priya"
              status="AVAILABLE"
            />
            <ItemCard
              category="VEHICLES"
              title="Activa 6G - 2022 Model"
              description="Well maintained scooter, first owner. All documents clear. Insurance valid."
              price={62000}
              locationDetails="Koramangala, Bangalore"
              tags={["First Owner", "Insured"]}
              sellerName="Ramesh"
              status="AVAILABLE"
            />
          </div>
        </div>
      )}

      {/* Empty State */}
      {counts[activeTab] === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[40vh] gap-4 text-center">
          <div className="size-20 rounded-full bg-muted flex items-center justify-center">
            <Bookmark className="size-10 text-muted-foreground" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">No bookmarks yet</h3>
            <p className="text-muted-foreground max-w-md">
              Save items, rentals, and activities you're interested in to access them easily later
            </p>
          </div>
          <Button className="rounded-full mt-2">
            Explore Now
          </Button>
        </div>
      )}
    </>
  );
};

export default BookmarksPage;
