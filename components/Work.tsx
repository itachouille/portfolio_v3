/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { WorkProps } from "@/types";
import { Badge } from "./ui/badge";

export const Work = (props: WorkProps) => {
    return (
      <Link
        href={props.url}
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        target="_blank"
      >
        <img
          className="size-10 object-contain rounded-md"
          src={props.image}
          alt={props.title}
        />
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.title}</p>
            {props.badge && <Badge variant="outline">Certif</Badge>}
          </div>
          <p className="text-xs text-muted-foreground">{props.role}</p>
        </div>
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </Link>
    );
  };