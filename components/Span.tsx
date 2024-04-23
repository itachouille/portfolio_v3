import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Span = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
      <span
        className={cn(
          "relative font-mono text-primary bg-accent/30 hover:bg-accent/50 transition-colors border border-accent px-1 rounded-sm",
          className
        )}
        {...props}
      />
    );
  };