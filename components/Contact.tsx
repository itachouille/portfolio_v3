import { CONTACTS } from "@/constants"
import { Section } from "./Section"
import { Badge } from "./ui/badge"
import { ContactCard } from "./ContactCard"

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
        <Badge variant="outline">Contactez moi</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Je serai heureux de travailler avec vous.
      </h2>
      <div className="w-full flex max-md:flex-col gap-4 md:justify-between">
      {CONTACTS.map((contact, index) => (
            <ContactCard key={index} {...contact} />
          ))}
      </div>
    </Section>
  )
}
