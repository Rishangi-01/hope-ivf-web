import HomecareHero from "@/components/home/HomecareHero";
import TeamSection from "@/components/home/TeamSection";
import TeamHero from "@/components/team/TeamHero";

export default function Team() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <TeamHero />
      <TeamSection />
      <HomecareHero />
    </div>
  );
}
