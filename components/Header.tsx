import Link from "next/link";
import { Section } from "./Section";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-xl font-bold text-primary">anthonydavid.fr</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/itachouille"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            target="_blank"
          >
            <GithubIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="/#"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            target="_blank"
          >
            <TwitterIcon size={16} className="text-foreground" />
          </Link>
          <Link
            href="https://linkedin.com/in/anthonydavid29"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            target="_blank"
          >
            <LinkedinIcon size={16} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
