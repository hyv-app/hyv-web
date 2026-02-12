import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, Users } from "lucide-react";

interface ActivityCardProps {
  title: string;
  description: string;
  host: string;
  startTime: string;
  endTime?: string;
  locationDetails: string;
  maxParticipants: number;
  currentParticipants: number;
  isTrending?: boolean;
}

const ActivityCard = ({
  title,
  description,
  host,
  startTime,
  endTime,
  locationDetails,
  maxParticipants,
  currentParticipants,
  isTrending = false,
}: ActivityCardProps) => {
  const spotsLeft = maxParticipants - currentParticipants;

  return (
    <div className="flex flex-col gap-3 shadow-lg rounded-xl p-4 border bg-card relative h-full">
      <div className="text-xl font-medium">{title}</div>
      <Separator className="bg-linear-to-r from-lime-400 to-card" />
      
      <div className="font-secondary leading-7 flex-1">{description}</div>
      
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="size-4" />
          <span className="font-secondary">{locationDetails}</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="size-4" />
          <span className="font-secondary">
            {startTime}
            {endTime && ` - ${endTime}`}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="size-4" />
          <div className="font-secondary flex items-center gap-1">
            {currentParticipants}/{maxParticipants} joined
            {spotsLeft > 0 && (
              <span className="text-lime-600 dark:text-lime-400 font-medium">
                • {spotsLeft} spot{spotsLeft !== 1 ? "s" : ""} left
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-1 text-sm font-secondary text-muted-foreground">
        <span>Hosted by</span>
        <span className="font-medium text-foreground underline">{host}</span>
      </div>
      
      <div className="flex items-center justify-between gap-2 mt-auto pt-2">
        {isTrending ? (
          <div className="bg-linear-to-r from-lime-200 via-cyan-200 to-violet-200 text-black text-xs font-medium px-2 py-1 rounded-full self-end">
            Trending 📈
          </div>
        ) : (
          <div></div>
        )}
        <Button
          variant="outline"
          className="rounded-full w-fit bg-transparent dark:bg-transparent border-lime-400 hover:bg-lime-50 dark:border-lime-400 dark:hover:bg-lime-950 shrink-0"
        >
          {`I'm Interested`}
        </Button>
      </div>
    </div>
  );
};

export default ActivityCard;
