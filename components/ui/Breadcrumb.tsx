import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  currentPage?: string;
  className?: string;
}

export default function Breadcrumb({
  items,
  currentPage,
  className = "",
}: BreadcrumbProps) {
  const breadcrumbItems: BreadcrumbItem[] =
    items && items.length > 0
      ? items
      : [
          { label: "Home", href: "/" },
          ...(currentPage ? [{ label: currentPage }] : []),
        ];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-medium text-[#8c5b53]">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="inline-flex items-center gap-2"
            >
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="inline-flex items-center text-[#8c5b53]/60 select-none"
                >
                  <span className="sr-only">&gt;</span>
                  <ChevronRight
                    size={15}
                    strokeWidth={2.4}
                    className="shrink-0"
                  />
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  aria-current="page"
                  className="font-semibold text-[#5c3731]"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-[#5c3731] hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
