import WellnessGallery from "@/components/home/WellnessGallery";
import SuccessStoryHero from "@/components/success-story/SuccessStoryHero";
import Testimonials from "@/components/success-story/Testimonials";

export default function SuccessStories() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <SuccessStoryHero />
      <Testimonials />
      <WellnessGallery />
    </div>
  );
}
