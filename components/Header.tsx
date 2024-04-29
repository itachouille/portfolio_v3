import Link from "next/link";
import { Section } from "./Section";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-xl md:text-2xl font-bold text-primary">
          davidanthony.fr
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <li>
            <Link
              href="https://github.com/itachouille"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 md:size-10 p-0"
              )}
              target="_blank"
              aria-label="github icon"
            >
              <GithubIcon size={16} className="text-foreground" aria-hidden="true"/>
            </Link>
          </li>
          <li>
            <Link
              href="/#"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 md:size-10 p-0"
              )}
              target="_blank"
              aria-label="twitter icon"
            >
              <TwitterIcon size={16} className="text-foreground" aria-hidden="true"/>
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/in/anthonydavid29"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 md:size-10 p-0"
              )}
              target="_blank"
              aria-label="linkedin icon"
            >
              <LinkedinIcon size={16} className="text-foreground" aria-hidden="true"/>
            </Link>
          </li>
        </ul>
      </Section>
    </header>
  );
};
