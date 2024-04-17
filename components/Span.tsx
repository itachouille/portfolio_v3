import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Span = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
      <span
        className={cn(
          "font-mono text-primary bg-accent/30 hover:bg-accent/50 transition-colors border border-accent px-1 py-0.5 rounded-sm",
          className
        )}
        {...props}
      />
    );
  };