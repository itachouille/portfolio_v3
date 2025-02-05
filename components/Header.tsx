import Link from "next/link";
import { Section } from "./Section";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { GithubIcon } from "./icons/GithubIcon";
import { BlueskyIcon } from "./icons/TwitterIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MaltIcon } from "./icons/MaltIcon";

export const Header = () => {
  return (
    <header className="top-0 sticky py-4 bg-background/75 backdrop-blur-lg z-50">
      <Section className="flex items-baseline">
        <h1 className="text-xl md:text-2xl font-bold text-primary">
          davidanthony.fr
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <li>
            <Link
              href="https://www.malt.fr/profile/anthonydavid"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 md:size-10 p-0"
              )}
              target="_blank"
              aria-label="malt icon"
            >
              <MaltIcon
                size={16}
                className="text-foreground"
                aria-hidden="true"
              />
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
              <LinkedinIcon
                size={16}
                className="text-foreground"
                aria-hidden="true"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://bsky.app/profile/itachouille.bsky.social"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 md:size-10 p-0"
              )}
              target="_blank"
              aria-label="twitter icon"
            >
              <BlueskyIcon
                size={16}
                className="text-foreground"
                aria-hidden="true"
              />
            </Link>
          </li>
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
              <GithubIcon
                size={16}
                className="text-foreground"
                aria-hidden="true"
              />
            </Link>
          </li>
        </ul>
      </Section>
    </header>
  );
};
