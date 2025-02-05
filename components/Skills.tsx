import { FC, ReactNode } from "react";
import { Section } from "./Section";
import { Span } from "./Span";
import { ApiLogo } from "./icons/ApiLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { Badge } from "./ui/badge";

interface SkillItemProps {
  logo: ReactNode;
  title: string;
  description: ReactNode;
}

const SkillItem: FC<SkillItemProps> = ({ logo, title, description }) => (
  <div className="flex flex-col gap-2 flex-1">
    {logo}
    <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export const Skills: FC = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Compétences</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J&apos;adore travailler avec...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <SkillItem
          logo={<ReactLogo size={42} />}
          title="React"
          description={
            <>
              Mon framework principal est <Span>React</Span>, avec{" "}
              <Span>Next.js</Span> pour des fonctionnalités avancées.
            </>
          }
        />
        <SkillItem
          logo={<TailwindLogo size={42} />}
          title="Tailwind"
          description={
            <>
              Je crée des interfaces <u>attrayantes</u> et <i>réactives</i> en
              un temps record grâce à <Span>TailwindCSS</Span>.
            </>
          }
        />
        <SkillItem
          logo={<ApiLogo size={42} />}
          title="Intégration d'API"
          description={
            <>
              J&apos;intègre des API dans mes applications pour améliorer et
              enrichir l&apos;<u>expérience utilisateur</u>.
            </>
          }
        />
      </div>
    </Section>
  );
};
