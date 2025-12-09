import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
      <div className="relative w-[calc(100vw-2rem)] max-w-2xl self-center">
        <div className="absolute inset-0 -z-10 blur-lg bg-linear-to-br from-violet-200 via-cyan-200 to-lime-200" />
        <form className="flex items-center justify-center gap-1.5">
          <Input
            placeholder="Find anything around you..."
            className="font-secondary bg-background rounded-full h-12 px-6"
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

      {/* Roommate finder */}
      <div className="flex flex-col gap-6">
        <div
          className="text-xl/[1.2] xs:text-2xl/[1.2] tracking-tight w-fit"
          style={{
            textBox: "trim-both cap alphabetic",
          }}
        >
          <span className="font-medium bg-linear-to-br from-violet-200 via-cyan-200 to-lime-200">Rooms</span> for you
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-card flex flex-col gap-4 shadow-lg rounded-xl p-6 border border-violet-400">
            <div className="text-2xl font-medium">Example Title</div>
            <div className="font-secondary leading-9 line-clamp-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="bg-card flex flex-col gap-4 shadow-lg rounded-xl p-6 border border-violet-400">
            <div className="text-2xl font-medium">Example Title</div>
            <div className="font-secondary leading-9 line-clamp-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="bg-card flex flex-col gap-4 shadow-lg rounded-xl p-6 border border-violet-400">
            <div className="text-2xl font-medium">Example Title</div>
            <div className="font-secondary leading-9 line-clamp-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>

      <div className="h-dvh bg-neutral-100 flex items-center justify-center rounded-xl">
        Sample content
      </div>
    </>
  );
};

export default HomePage;
