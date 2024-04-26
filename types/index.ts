import { LucideIcon } from "lucide-react";

export type SpacingProps = {
  size?: "sm" | "md" | "lg";
};

export type SideProjectProps = {
    logo: LucideIcon;
    title: string;
    description: string;
    url: string;
  };

export type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
    badge?: boolean;
  };

export type ContactCardProps = {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
}