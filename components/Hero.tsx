import { Section } from "./Section";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";
import { Span } from "./Span";
import Image from "next/image";
import profilePic from "../public/profilePic.png";
import { BlueskyIcon } from "./icons/TwitterIcon";
import { MaltIcon } from "./icons/MaltIcon";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2 md:gap-6">
        <h2 className="font-caption text-primary text-5xl font-bold">
          DAVID Anthony
        </h2>
        <h3 className="font-caption text-2xl md:text-3xl">
          Développeur Web Freelance
        </h3>
        <p className="text-sm leading-relaxed md:leading-loose md:text-base">
          Passionné par le développement web, j&apos;ai commencé en autodidacte
          avec HTML, CSS et JavaScript. Pour approfondir mes compétences,
          j&apos;ai suivi la formation de développeur web fullstack chez
          Hardcoders.
          <br />
          Aujourd&apos;hui, j&apos;accompagne des entreprises et startups dans
          la création de leurs applications web.
          <br />
          Vous avez un projet ? Retrouvez-moi sur{" "}
          <Link href="https://www.malt.fr/profile/anthonydavid" target="_blank">
            <Span className="inline-flex items-center gap-1 -bottom-0.5">
              <MaltIcon className="inline" size={16} /> Malt
            </Span>
          </Link>
          ,{" "}
          <Link href="https://linkedin.com/in/anthonydavid29" target="_blank">
            <Span className="inline-flex items-center gap-1 -bottom-0.5">
              <LinkedinIcon className="inline" size={16} /> LinkedIn
            </Span>
          </Link>{" "}
          ou{" "}
          <Link
            href="https://bsky.app/profile/itachouille.bsky.social"
            target="_blank"
          >
            <Span className="inline-flex items-center gap-1 -bottom-0.5">
              <BlueskyIcon className="inline" size={16} /> Bluesky
            </Span>
          </Link>
          .
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto md:contents">
        <Image
          src={profilePic}
          alt="Photo de Anthony David"
          className="w-full h-auto rounded-full max-w-xs max-md:w-56"
        />
      </div>
    </Section>
  );
};
