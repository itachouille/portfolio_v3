import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Spacing } from "@/components/Spacing";
import { Status } from "@/components/Status";

export default function Home() {
  return (
    <main >
        <Header />
        <Spacing size="md" />
        <Hero />
        <Spacing size="md" />
        <Status />
        <Spacing size="md" />
        <Skills />
        <Spacing size="md" />
        <Contact />
        <Spacing size="md" />
        <Footer />
    </main>
  );
}
