import { Section } from "./Section"
import { Badge } from "./ui/badge"

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant="outline">Contactez moi</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Je serai heureux de travailler avec vous.
      </h2>
      <div className="w-full flex max-md:flex-col gap-4">
        faire des cartes mail, twitter linkedIn apres refacto 
      </div>
    </Section>
  )
}
