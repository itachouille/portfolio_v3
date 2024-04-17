/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Section } from "./Section";
import { Card } from "./ui/card";
import {
  ArrowUpRight,
  Code,
  Home,
  LucideIcon,
  MessageCircle,
  Tv,
  Weight,
} from "lucide-react";
import { Badge } from "./ui/badge";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject key={index} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="flex-1 p-4">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="flex-1 p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            name="@itachouille"
            image="photo.jpeg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
            description="12 abonnés"
          />
          <ContactCard
            name="Anthony DAVID"
            image="photo.jpeg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            description="23 abonnés"
          />
        </Card>
      </div>
    </Section>
  );
};

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="w-full p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 transition-colors group">
      <div className="relative size-10">
        <img
          src={props.image}
          alt={props.name}
          className="size-10 rounded-full object-contain"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="absolute size-4 -bottom-1 -right-1 rounded-full object-contain"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight
        className="mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
        size={16}
      />
    </Card>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    logo: Tv,
    title: "MySeries",
    description: "Une app de gestion de séries TV basée sur la stack MERN.",
    url: "https://myseries.vercel.app/",
  },
  {
    logo: Code,
    title: "MySeries",
    description: "Une app de gestion de séries TV basée sur la stack MERN.",
    url: "https://myseries.vercel.app/",
  },
  {
    logo: MessageCircle,
    title: "MySeries",
    description: "Une app de gestion de séries TV basée sur la stack MERN.",
    url: "https://myseries.vercel.app/",
  },
  {
    logo: Weight,
    title: "MySeries",
    description: "Une app de gestion de séries TV basée sur la stack MERN.",
    url: "https://myseries.vercel.app/",
  },
  {
    logo: Weight,
    title: "MySeries",
    description: "Une app de gestion de séries TV basée sur la stack MERN.",
    url: "https://myseries.vercel.app/",
  },
  {
    logo: Weight,
    title: "MySeries",
    description: "Une app de gestion de séries TV basée sur la stack MERN.",
    url: "https://myseries.vercel.app/",
  },
];

type SideProjectProps = {
  logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: WorkProps[] = [
  {
    image: "./logo_oclock.png",
    title: "Alternance",
    role: "blabla",
    date: "2024 - Present",
    url: "https://oclock.io/",
  },
  {
    image: "./logo_oclock.png",
    title: "Alternance",
    role: "blabla",
    date: "2024 - Present",
    url: "https://oclock.io/",
    freelance: true,
  },
  {
    image: "./logo_oclock.png",
    title: "Alternance",
    role: "blablablabl",
    date: "2024 - Present",
    url: "https://oclock.io/",
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        className="size-10 object-contain rounded-md"
        src={props.image}
        alt={props.title}
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Mission</Badge>}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
