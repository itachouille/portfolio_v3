import { ContactCardProps } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

export const ContactCard = (props: ContactCardProps) => {
  return (
    <Link href={props.url} target="_blank">
      <Card className="w-full p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 transition-colors group">
        <div className="relative size-10">
          <Image
            src={props.image}
            width={40}
            height={40}
            alt={props.name}
            className="rounded-full object-contain"
          />
          <Image
            src={props.mediumImage}
            width={0}
            height={0}
            alt={props.name}
            className="absolute w-4 h-auto -bottom-1 -right-1 rounded-full object-contain"
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
    </Link>
  );
};
