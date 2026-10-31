import AboutSection from "@/components/home/AboutSection";
import AboutHero from "@/components/about/AboutHero";
import HomecareHero from "@/components/home/HomecareHero";
import Image from "next/image";
import OurJourney from "@/components/about/OurJourney";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <AboutHero />
      <AboutSection/>
      <OurJourney />
      <HomecareHero />
    </div>
  );
}
