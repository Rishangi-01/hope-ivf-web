import Image from "next/image";
import FertilityTreatments from "@/components/services/FertilityTreatments";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesSection from "@/components/home/ServicesSection";
import MedicalServices from "@/components/home/MedicalServices";

export default function Services() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ServicesHero />
      <ServicesSection />
      <MedicalServices />
      <FertilityTreatments />
    </div>
  );
}
