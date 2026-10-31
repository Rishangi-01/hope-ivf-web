import Image from "next/image";
import ServiceDetailsHero from "@/components/service-details/ServiceDetailsHero";
import FertilityTreatmentsDetails from "@/components/service-details/FertilityTreatmentsDetails";

export default function ServiceDetails() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ServiceDetailsHero />
      <FertilityTreatmentsDetails />
    </div>
  );
}
