import { Section } from "./Section";
import { Span } from "./Span";
import { ApiLogo } from "./icons/ApiLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { Badge } from "./ui/badge";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Compétences</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J&apos;adore travailler sur...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <ReactLogo
            size={42}
            className="animate-spin"
            style={{ animation: "spin 10s linear infinite" }}
          />
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            Mon framework principal est <Span>React</Span>.<br />
            J&apos;utilise également <Span>Next.js</Span>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            Je peux créer une <u>belle</u> application en quelques{" "}
            <i>minutes</i> en utilisant <Span>TailwindCSS</Span>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <ApiLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">
            API Integration
          </h3>
          <p className="text-sm text-muted-foreground">
            J&apos;aime intégrer des API dans mes applications pour créer une
            parfaite <u>expérience utilisateur</u>.
          </p>
        </div>
      </div>
    </Section>
  );
};
