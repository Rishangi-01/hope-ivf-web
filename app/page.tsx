import HeroSection from "@/components/home/HeroSection";
import HomecareHero from "@/components/home/HomecareHero";
import MedicalServices from "@/components/home/MedicalServices";
import ServicesSection from "@/components/home/ServicesSection";
import WellnessGallery from "@/components/home/WellnessGallery";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <WellnessGallery />
      <HomecareHero />
      <ServicesSection />
      <MedicalServices />
    </div>
  );
}
