import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex items-center gap-2">
        <div className="h-1 w-10 bg-lime-400 rounded-full" />
        <div
          className="text-2xl/[1.2] sm:text-3xl/[1.2] md:text-4xl/[1.2] tracking-tight w-fit"
          style={{
            textBox: "trim-both cap alphabetic",
          }}
        >
          Hello <span className="font-medium">Indrajit 😎</span>
        </div>
      </div>

      {/* Input */}
      <div className="p-px rounded-full w-[calc(100vw-2rem)] max-w-2xl self-center bottom-4 lg:bottom-6 bg-linear-to-r from-violet-400 via-cyan-400 to-lime-400">
        <Input
          placeholder="Ask anything..."
          className="p-6 font-secondary w-full border-none focus-visible:ring-offset-0 focus-visible:ring-0"
        />
      </div>

      {/* Example card */}
      <div className="bg-card flex flex-col gap-4 shadow-lg rounded-xl p-6 max-w-xl border">
        <div className="text-2xl lg:text-3xl font-medium">Example Title</div>
        <div className="font-secondary leading-9 line-clamp-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className="h-dvh bg-neutral-100 flex items-center justify-center rounded-xl">Sample content</div>
    </>
  );
};

export default HomePage;