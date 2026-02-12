import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Tag, Home, ImageIcon } from "lucide-react";
import Image from "next/image";

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
  images = [],
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
    <div className="flex flex-col shadow-lg rounded-xl border bg-card relative h-full overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full aspect-video shrink-0">
        {images.length > 0 ? (
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 flex items-center justify-center">
            <ImageIcon className="size-10 text-muted-foreground/30" />
          </div>
        )}
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            +{images.length - 1} more
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4 flex-1">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide w-fit">
              <Home className="size-3" />
              <span className="text-trim">{typeLabels[type]}</span>
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
            <div className="bg-linear-to-t from-violet-200 to-violet-50 text-black text-xs font-medium px-2 py-1 rounded-full self-end">
              Boosted
            </div>
          ) : (
            <div></div>
          )}
          <Button
            variant="outline"
            className="rounded-full w-fit bg-transparent dark:bg-transparent border-violet-400 hover:bg-violet-50 dark:border-violet-400 dark:hover:bg-violet-950 shrink-0"
          >
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RentalCard;
