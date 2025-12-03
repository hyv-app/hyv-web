import TopBar from "@/components/TopBar";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  return (
    <>
      <TopBar />
      {/* Example card */}
      <div className="bg-card flex flex-col gap-4 shadow-lg rounded-xl p-6 max-w-xl border border-orange-400">
        <div className="text-2xl lg:text-3xl font-medium">Example Title</div>
        <Separator />
        <div className="text-muted-foreground font-secondary leading-9 line-clamp-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </>
  )
}

export default Home;