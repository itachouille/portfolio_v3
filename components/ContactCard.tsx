/* eslint-disable @next/next/no-img-element */
import { ContactCardProps } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";

export const ContactCard = (props: ContactCardProps) => {
    return (
      <Card className="w-full p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 transition-colors group">
        <div className="relative size-10">
          <img
            src={props.image}
            alt={props.name}
            className="size-10 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className="absolute size-4 -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          className="mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
          size={16}
        />
      </Card>
    );
  };
  