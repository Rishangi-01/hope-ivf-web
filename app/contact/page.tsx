import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
