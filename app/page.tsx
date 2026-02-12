import Greeting from "@/components/Greeting";
import ActivityCard from "@/components/cards/ActivityCard";
import RentalCard from "@/components/cards/RentalCard";
import ItemCard from "@/components/cards/ItemCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HomePage = () => {
  return (
    <>
      {/* Greeting Section */}
      <Greeting />

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
              className="rounded-full font-normal focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-foreground dark:focus-visible:border-foreground"
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
          <span className="font-medium text-foreground">Activities</span> trending around you
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <ActivityCard
            title="Book Reading Circle"
            description="Discuss 'The Midnight Library' over coffee. Small group, mixed genres welcome."
            host="Aditi"
            startTime="Sat, 18 Jan at 5:00 PM"
            endTime="7:00 PM"
            locationDetails="Cafe Matteo, Koramangala"
            maxParticipants={8}
            currentParticipants={5}
            isTrending
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
            isTrending
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div
          className="text-xl/[1.2] xs:text-2xl/[1.2] w-fit text-muted-foreground"
        >
          Popular <span className="font-medium text-foreground">Items</span> 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <ItemCard
            category="ELECTRONICS"
            title="MacBook Pro 14 M3"
            description="Barely used, 6 months old. 16GB RAM, 512GB SSD. Original box and charger included."
            price={95000}
            locationDetails="HSR Layout, Bangalore"
            tags={["Like New", "Warranty Valid"]}
            sellerName="Priya"
            status="AVAILABLE"
            isBoosted
          />
          <ItemCard
            category="TICKETS"
            title="DJ Snake Sunburn Goa"
            description="2 VIP tickets for Day 2. Can't make it anymore. Transferable via BookMyShow."
            price={12000}
            locationDetails="Vagator, Goa"
            tags={["VIP Access", "Day 2"]}
            sellerName="Arjun"
            status="AVAILABLE"
          />
          <ItemCard
            category="FURNITURE"
            title="Wooden Study Table"
            description="Solid wood table with drawer. Great condition. Perfect for home office setup."
            price={4500}
            locationDetails="Whitefield, Bangalore"
            tags={["Solid Wood", "Good Condition"]}
            sellerName="Meera"
            status="RESERVED"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div
          className="text-xl/[1.2] xs:text-2xl/[1.2] w-fit text-muted-foreground"
        >
          <span className="font-medium text-foreground">Rentals</span> near you
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <RentalCard
            type="ROOM"
            title="Spacious Room in Shared Apartment"
            description="Fully furnished room with attached bathroom. AC, WiFi, and laundry included. Friendly flatmates."
            price={12000}
            locationDetails="Koramangala 4th Block, Bangalore"
            tags={["Furnished", "AC", "WiFi", "Attached Bath"]}
            ownerName="Sanjay"
            isBoosted
          />
          <RentalCard
            type="APARTMENT"
            title="2BHK Near Metro Station"
            description="Recently renovated 2BHK apartment. Modern kitchen, parking available. Pet-friendly building."
            price={28000}
            locationDetails="Indiranagar, Near Metro"
            tags={["Pet Friendly", "Parking", "Metro Access"]}
            ownerName="Kavya"
          />
          <RentalCard
            type="ROOM"
            title="Female Roommate Needed"
            description="Vegetarian preferred. 3BHK apartment, looking for one more flatmate. Quiet neighborhood."
            price={9000}
            locationDetails="Whitefield, Bangalore"
            tags={["Vegetarian", "Female Only", "Quiet Area"]}
            ownerName="Anjali"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
