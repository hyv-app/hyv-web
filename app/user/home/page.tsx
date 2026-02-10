import Greeting from "@/components/Greeting";
import ActivityCard from "@/components/cards/ActivityCard";
import RentalCard from "@/components/cards/RentalCard";
import ItemCard from "@/components/cards/ItemCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const UserHome = () => {
  return (
    <>
      {/* Greeting Section */}
      <Greeting name="Indrajit" isHome/>

      {/* Glow Input */}
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-0 -z-10 blur-lg bg-linear-to-br from-violet-200 via-cyan-200 to-lime-200 dark:from-violet-900 dark:via-cyan-900 dark:to-lime-900" />
          <form className="flex items-center justify-center gap-2">
            <Input
              placeholder="Find anything around you..."
              className="font-secondary bg-background dark:bg-background rounded-full h-12 px-4"
            />
            <Button
              type="submit"
              className="size-12 bg-background hover:bg-foreground hover:text-background dark:bg-background dark:hover:bg-foreground dark:hover:text-background rounded-full"
              variant="outline"
            >
              <Search className="size-5" />
            </Button>
          </form>
        </div>
        {/* Suggested queries */}
        <div className="max-w-full flex gap-2 font-secondary overflow-auto no-scrollbar">
          {[
            "Athletic activities near me",
            "DJ Snake Sunburn tickets",
            "Roommates in Whitefield, vegetarian",
          ].map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className="rounded-full font-normal hover:bg-lime-50 hover:border-lime-400 dark:hover:bg-lime-950 dark:hover:border-lime-400 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-lime-50 focus-visible:border-lime-400 dark:focus-visible:bg-lime-950 dark:focus-visible:border-lime-400"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>


      {/* Activities */}
      <div className="flex flex-col gap-4">
        <div
          className="text-xl/[1.2] xs:text-2xl/[1.2] w-fit text-muted-foreground"
        >
          <span className="font-medium text-foreground">Activities</span> you might like
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          <ActivityCard
            title="Book Reading Circle"
            description="Discuss 'The Midnight Library' over coffee. Small group, mixed genres welcome."
            host="Aditi"
            startTime="Sat, 18 Jan at 5:00 PM"
            endTime="7:00 PM"
            locationDetails="Cafe Matteo, Koramangala"
            maxParticipants={8}
            currentParticipants={5}
          />
          <ActivityCard
            title="Morning Run Meetup"
            description="5K easy pace around Cubbon Park. All levels welcome, cool-down stretch included."
            host="Raj"
            startTime="Sun, 19 Jan at 6:30 AM"
            endTime="8:00 AM"
            locationDetails="Cubbon Park Main Gate"
            maxParticipants={15}
            currentParticipants={12}
          />
          <ActivityCard
            title="Board Games + Chai"
            description="Catan, Codenames, Splendor. Casual evening with snacks in Indiranagar."
            host="Neeraj"
            startTime="Fri, 24 Jan at 7:30 PM"
            locationDetails="Game Theory Cafe, Indiranagar"
            maxParticipants={10}
            currentParticipants={6}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div
          className="text-xl/[1.2] xs:text-2xl/[1.2] w-fit text-muted-foreground"
        >
          <span className="font-medium text-foreground">Items</span> for you
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          <ItemCard
            category="ELECTRONICS"
            title="iPhone 15 Pro"
            description="Space Black, 256GB. Mint condition, 3 months old. Still under warranty."
            price={82000}
            locationDetails="Koramangala, Bangalore"
            tags={["Like New", "Warranty"]}
            sellerName="Karthik"
            status="AVAILABLE"
          />
          <ItemCard
            category="BOOKS"
            title="Web Development Book Bundle"
            description="5 books on React, Node.js, and TypeScript. Barely used, excellent condition."
            price={1500}
            locationDetails="HSR Layout, Bangalore"
            tags={["Tech", "Bundle Deal"]}
            sellerName="Divya"
            status="AVAILABLE"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div
          className="text-xl/[1.2] xs:text-2xl/[1.2] w-fit text-muted-foreground"
        >
          <span className="font-medium text-foreground">Rentals</span> matching your preferences
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          <RentalCard
            type="ROOM"
            title="Cozy Room in Tech Park Area"
            description="Fully furnished with WiFi, AC, and all amenities. Close to major IT parks."
            price={11000}
            locationDetails="Bellandur, Bangalore"
            tags={["Furnished", "WiFi", "AC"]}
            ownerName="Rahul"
          />
          <RentalCard
            type="APARTMENT"
            title="1BHK Independent House"
            description="Ground floor, separate entrance. Perfect for young professionals or couples."
            price={15000}
            locationDetails="BTM Layout, Bangalore"
            tags={["Independent", "Ground Floor"]}
            ownerName="Lakshmi"
            isBoosted
          />
        </div>
      </div>
    </>
  );
};

export default UserHome;
