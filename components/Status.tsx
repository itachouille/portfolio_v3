/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section";
import { Card } from "./ui/card";
import { SIDE_PROJECTS, WORKS } from "@/constants";
import { SideProject } from "./SideProject";
import { Work } from "./Work";
import { ContactCard } from "./ContactCard";

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
          <p className="text-lg text-muted-foreground">Work - Certification</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="flex-1 p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            name="Anthony DAVID"
            image="photo.jpeg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
            description="23 abonnés"
          />
          <ContactCard
            name="@itachouille"
            image="photo.jpeg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
            description="12 abonnés"
          />
        </Card>
      </div>
    </Section>
  );
};