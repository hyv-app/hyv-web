import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex items-center gap-2">
        <div className="h-1 w-10 bg-lime-400 rounded-full" />
        <div
          className="text-2xl/[1.2] xs:text-3xl/[1.2] md:text-4xl/[1.2] tracking-tight w-fit"
          style={{
            textBox: "trim-both cap alphabetic",
          }}
        >
          Hello <span className="font-medium">Indrajit 😎</span>
        </div>
      </div>

      {/* Glow Input */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 my-2 md:my-0">
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-0 -z-10 blur-lg bg-linear-to-br from-violet-200 via-cyan-200 to-lime-200" />
          <form className="flex items-center justify-center gap-2">
            <Input
              placeholder="Find anything around you..."
              className="font-secondary bg-background rounded-full h-12 px-4"
            />
            <Button
              type="submit"
              className="size-12 rounded-full"
              variant="outline"
            >
              <Search className="size-5" />
            </Button>
          </form>
        </div>
        {/* Suggested queries */}
        <div className="max-w-full flex gap-2 font-secondary overflow-auto no-scrollbar">
          {[
            "Roommates in Whitefield, vegetarian",
            "Sunburn tickets this weekend",
            "Athletic activities near me",
          ].map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className="rounded-full font-normal hover:border-lime-400 hover:bg-background"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>


      {/* Activities */}
      <div className="flex flex-col gap-6">
        <div
          className="text-xl/[1.2] xs:text-2xl/[1.2] w-fit"
          style={{
            textBox: "trim-both cap alphabetic",
          }}
        >
          <span className="font-medium bg-linear-to-br from-violet-100 via-cyan-100 to-lime-100">Activities</span> you might like
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            {
              title: "Book Reading Circle",
              desc: `Discuss 'The Midnight Library' over coffee. Small group, mixed genres welcome.`,
              host: "Aditi",
              date: "Sat, 18 Jan at 5:00 PM",
            },
            {
              title: "Morning Run Meetup",
              desc: "5K easy pace around Cubbon Park. All levels welcome, cool-down stretch included.",
              host: "Raj",
              date: "Sun, 19 Jan at 6:30 AM",
            },
            {
              title: "Board Games + Chai",
              desc: "Catan, Codenames, Splendor. Casual evening with snacks in Indiranagar.",
              host: "Neeraj",
              date: "Fri, 24 Jan at 7:30 PM",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-3 shadow-lg rounded-xl p-4 border"
            >
              <div className="text-xl font-medium">{card.title}</div>
              <Separator className="bg-linear-to-r from-lime-400 to-background" />
              <div className="font-secondary leading-loose">
                {card.desc}
              </div>
              <div className="flex flex-wrap items-center gap-1 text-sm font-secondary text-muted-foreground">
                <span>Hosted by</span>
                <span className="font-medium text-foreground underline">{card.host}</span>
                <span>•</span>
                <span className="italic">{card.date}</span>
              </div>
              <Button
                variant="outline"
                className="rounded-full w-fit self-end bg-cyan-50/50 border-cyan-400 hover:bg-cyan-50 mt-2"
              >
                {`I'm Interested`}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div
          className="text-xl/[1.2] xs:text-2xl/[1.2] w-fit"
          style={{
            textBox: "trim-both cap alphabetic",
          }}
        >
          <span className="font-medium bg-linear-to-br from-violet-100 via-cyan-100 to-lime-100">Rooms</span> for you
        </div>
        <div className="h-dvh bg-neutral-100 flex items-center justify-center rounded-xl font-medium">
          Sample content
        </div>
      </div>
    </>
  );
};

export default HomePage;
