import AboutSection from "@/components/home/AboutSection";
import AboutHero from "@/components/about/AboutHero";
import Image from "next/image";
import OurJourney from "@/components/about/OurJourney";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import OurValuesSection from "@/components/about/OurValuesSection";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <AboutHero />
      <AboutSection/>
      <OurJourney />
      <WhyChooseUs />
      <OurValuesSection />
    </div>
  );
}
