import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Tag, Home } from "lucide-react";

interface RentalCardProps {
  type: "ROOM" | "APARTMENT";
  title: string;
  description: string;
  price: number;
  currency?: "RUPEE" | "DOLLAR";
  locationDetails: string;
  tags?: string[];
  ownerName: string;
  images?: string[];
  isBoosted?: boolean;
}

const RentalCard = ({
  type,
  title,
  description,
  price,
  currency = "RUPEE",
  locationDetails,
  tags = [],
  ownerName,
  isBoosted = false,
}: RentalCardProps) => {
  const typeLabels = {
    ROOM: "Room",
    APARTMENT: "Apartment",
  };

  const currencySymbols = {
    RUPEE: "₹",
    DOLLAR: "$",
  };

  return (
    <div className="flex flex-col gap-3 shadow-lg rounded-xl p-4 border bg-card relative h-full">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
            <Home className="size-3" />
            {typeLabels[type]}
          </div>
          <div className="text-xl/normal font-medium line-clamp-2">{title}</div>
        </div>
        <div>
          <div className="text-xl font-bold text-foreground text-trim py-2 px-3 bg-foreground/5 rounded-lg">
            {currencySymbols[currency]}{price.toLocaleString()}
            <span className="text-xs font-normal text-muted-foreground block text-right uppercase">per month</span>
          </div>
        </div>
      </div>
      
      <Separator className="bg-linear-to-r from-violet-400 to-card" />
      
      <div className="font-secondary leading-7 flex-1">{description}</div>
      
      <div className="flex items-start gap-2 text-sm text-muted-foreground">
        <MapPin className="size-4 mt-0.5 shrink-0" />
        <span className="font-secondary">{locationDetails}</span>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
            >
              <Tag className="size-3" />
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex flex-wrap items-center gap-1 text-sm font-secondary text-muted-foreground">
        <span>Posted by</span>
        <span className="font-medium text-foreground underline">{ownerName}</span>
      </div>
      
      <div className="flex items-center justify-between gap-2 mt-auto pt-2">
        {isBoosted ? (
          <div className="bg-foreground text-background text-xs font-medium px-2 py-1 rounded-full">
            Boosted 🚀
          </div>
        ) : (
          <div />
        )}
        <Button
          variant="outline"
          className="rounded-full w-fit bg-transparent dark:bg-transparent border-violet-400 hover:bg-violet-50 dark:border-violet-400 dark:hover:bg-violet-950 shrink-0"
        >
          Connect
        </Button>
      </div>
    </div>
  );
};

export default RentalCard;
