import BlogDetailsHero from "@/components/blog-details/BlogDetailsHero";
import BlogDetailsSec from "@/components/blog-details/BlogDetailsSec";

export default function BlogDetails() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <BlogDetailsHero />
      <BlogDetailsSec />
    </div>
  );
}
