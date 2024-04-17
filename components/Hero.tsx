/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import Link from "next/link";
import { Span } from "./Span";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-primary text-5xl font-bold">
          Anthony DAVID
        </h2>
        <h3 className="font-caption text-3xl">
          Développeur Web en recherche d&apos;alternace
        </h3>
        <p className="text-base">
          bla bla bla{" "}
          <Link href="https://github.com/itachouille" target="_blank">
            <Span className="inline-flex items-center gap-1">
              <GithubIcon className="inline" size={16} /> Github
            </Span>
          </Link>{" "}
          bla bla bla{" "}
          <Link href="https://linkedin.com/in/anthonydavid29" target="_blank">
            <Span className="inline-flex items-center gap-1">
              <LinkedinIcon className="inline" size={16} /> LinkedIn
            </Span>
          </Link>{" "}
          bla bla bla bla bla bla bla bla bla bla bla{" "}
          <Link href="https://oclock.io/" target="_blank">
            <Span className="inline-flex items-center gap-1">
              <img
                style={{ width: 16, height: "auto" }}
                src="/logo_oclock.png"
                alt="Logo O'Clock"
              />{" "}
              O&apos;Clock
            </Span>
          </Link>{" "}
          bla bla bla
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="photo.jpeg"
          alt="anthony's picture"
          className="w-full h-auto rounded-full max-w-xs max-md:w-56"
        />
      </div>
    </Section>
  );
};
