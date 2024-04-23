import { SideProjectProps } from "@/types";
import Link from "next/link";

export const SideProject = (props: SideProjectProps) => {
    return (
      <Link
        href={props.url}
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
        target="_blank"
      >
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
          <props.logo size={18} />
        </span>
        <div>
          <p className="text-lg font-semibold">{props.title}</p>
          <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
      </Link>
    );
  };