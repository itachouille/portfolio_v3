import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";
import { Span } from "./Span";
import Image from "next/image";
import profilePic from "../public/profilePic.png";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2 md:gap-6">
        <h2 className="font-caption text-primary text-5xl font-bold">
          DAVID Anthony
        </h2>
        <h3 className="font-caption text-2xl md:text-3xl">Développeur Web</h3>
        <p className="text-sm leading-relaxed md:leading-loose md:text-base">
          Recherche d&apos;un contrat de professionnalisation de Janvier 2025 à
          Septembre 2026.
          <br />
          Rythme: 2 semaines en entreprise / 1 semaine en formation chez{" "}
          <Link href="https://oclock.io/" target="_blank">
            <Span className="inline-flex items-center gap-1 -bottom-0.5">
              <Image
                width={16}
                height={16}
                src="/logo_oclock.png"
                alt="Logo O'Clock"
              />{" "}
              O&apos;Clock
            </Span>
          </Link>
          <br />
          Retrouvez moi sur{" "}
          <Link href="https://linkedin.com/in/anthonydavid29" target="_blank">
            <Span className="inline-flex items-center gap-1  -bottom-0.5">
              <LinkedinIcon className="inline" size={16} /> LinkedIn
            </Span>
          </Link>{" "}
          ou sur{" "}
          <Link href="https://github.com/itachouille" target="_blank">
            <Span className="inline-flex items-center gap-1  -bottom-0.5">
              <GithubIcon className="inline" size={16} /> Github
            </Span>
          </Link>
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto md:contents">
        <Image
          src={profilePic}
          alt="anthony's picture"
          className="w-full h-auto rounded-full max-w-xs max-md:w-56"
        />
      </div>
    </Section>
  );
};
