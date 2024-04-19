import { Section } from "./Section";
import { Span } from "./Span";
import { OpenAILogo } from "./icons/OpenAILogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { Badge } from "./ui/badge";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on ...
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
            My main framework is <Span>React</Span>. I also use{" "}
            <Span>Next.js</Span> as a backend and frontend framework.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <TailwindLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            I can create <u>beautiful</u> application <i>in seconds</i> using{" "}
            <Span>TailwindCSS</Span>.
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <OpenAILogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">
            AI Integration
          </h3>
          <p className="text-sm text-muted-foreground">
            I love integrating AI in application to create a perfect{" "}
            <u>user experience</u>.
          </p>
        </div>
      </div>
    </Section>
  );
};
